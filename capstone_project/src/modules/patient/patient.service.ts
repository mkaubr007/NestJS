import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorService } from '../doctor/doctor.service';
import { Doctor } from '../doctor/entities/doctor.entity';
import { Hospital } from '../hospital/entities/hospital.entity';
import { HospitalService } from '../hospital/hospital.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private patientService: Repository<Patient>,
    private doctorService: DoctorService,
    private hospitalService: HospitalService
  ) { }
  public async addPatient(createPatientDto: CreatePatientDto): Promise<boolean> {
    const doctors: Doctor[] = await this.doctorService.findDoctorsByIds(createPatientDto.doctorIds, 'patient');
    const hospital: Hospital = await this.hospitalService.findOneHospitalById(createPatientDto.hospital_Id, 'patient');
    const newPatient: Patient = await this.patientService.save({
      patientName: createPatientDto.patientName,
      contactNumber: createPatientDto.contactNumber,
      emailId: createPatientDto.emailId ? createPatientDto.emailId : '',
      dateOfAdmission: createPatientDto.dateOfAdmission ? createPatientDto.dateOfAdmission : new Date(),
      // doctors: doctors,
      // hospital: hospital
    });
    doctors?.forEach(async (doctor: Doctor) => {
      if (doctor?.patients) {
        doctor.patients = [...doctor.patients, newPatient];
      }
      else {
        doctor.patients = [];
        doctor.patients.push(newPatient);
      }
      await doctor.save();
    });
    if (hospital?.patient) {
      hospital.patient = [...hospital.patient, newPatient];
    }
    else {
      hospital.patient = [];
      hospital.patient.push(newPatient);
    }
    await hospital.save();
    return true;
  }

  public async findAllPatients(): Promise<Patient[]> {
    return await this.patientService.find(
      {
        order: { patientId: 'DESC' }
      }
    );
  }

  public async findOnePatientById(id: number, requestFrom?: string): Promise<Patient> {
    if (requestFrom == 'observations') {
      return await this.patientService.findOne({
        where: { patientId: id },
        relations: ['observations'],
      });
    }
    else if (requestFrom == 'tests') {
      return await this.patientService.findOne({
        where: { patientId: id },
        relations: ['tests'],
      });
    }
    else {
      return await this.patientService.findOne({
        where: { patientId: id }
      });
    }
  }

  public async findPatientsByDoctorId(doctorId: number): Promise<Patient[]> {
    return await this.patientService.find({ where: { doctors: { doctorId: doctorId } } });
  }

  public async updatePatientById(patientId: number, updatePatientDto: UpdatePatientDto): Promise<boolean> {
    const response = await this.patientService.update(patientId, updatePatientDto);
    if (!response) {
      return false;
    }
    return true;
  }
}
