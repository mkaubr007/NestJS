import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Role } from '../auth/enums/role.enum';
import { HospitalService } from '../hospital/hospital.service';
import { Users } from '../user/entities/user.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor) private doctorRepo: Repository<Doctor>,
    @InjectRepository(Users) private userRepo: Repository<Users>,
    private jwtService: JwtService,
    private hospitalService: HospitalService
  ) { }
  public async addDoctor(createDoctorDto: CreateDoctorDto, headers: any): Promise<boolean> {
    const hospital = await this.hospitalService.findOneHospitalById(createDoctorDto.hospital_Id, 'doctor');
    const newDoctor: Doctor = await this.doctorRepo.save({
      doctorName: createDoctorDto.doctorName,
      contactNumber: createDoctorDto.contactNumber,
      registrationNumber: createDoctorDto.registrationNumber,
      emailId: createDoctorDto.emailId ? createDoctorDto.emailId : '',
      dateOfJoining: createDoctorDto.dateOfJoining ? createDoctorDto.dateOfJoining : new Date(),
      speciality: createDoctorDto.speciality ? createDoctorDto.speciality : 'General'
    });
    if (newDoctor.emailId !== headers.email && !hospital ) {
      return false;
    } else {
      hospital.doctor = [...hospital.doctor, newDoctor];
      await hospital.save()
      return true;
    }

  }

  public async findAllDoctors(headers: any, size: number, page: number): Promise<Doctor[]> {
    // return await this.doctorService.find(
    //   {
    //     order: { doctorId: 'DESC' }
    //   }
    // );
    const user = await this.userRepo.findOne({
      where: { email: headers.email },
    });

    if (user.role === Role.Admin){
      return await this.doctorRepo.find({ skip: (page - 1) * size, take: size });
    }
  }

  public async findOneDoctorById(id: number, requestFrom?: string, headers: any): Promise<Doctor> {
    const doctor = await this.doctorRepo.findOne({
      where: { id: headers.email },
    });
    const userData: any = this.jwtService.decode(
      headers.authorization.split(' ')[1],
    );
    if (doctor.emailId !== userData.email) {}
    if (requestFrom == 'observations') {
      return await this.doctorRepo.findOne({
        where: { doctorId: id },
        relations: ['observations'],
      });
    }
    else if (requestFrom == 'tests') {
      return await this.doctorRepo.findOne({
        where: { doctorId: id },
        relations: ['tests'],
      });
    }
    else {
      return await this.doctorRepo.findOne({
        where: { doctorId: id }
      });
    }
  }

  public async findOneDoctorByName(name: string): Promise<Doctor> {
    return await this.doctorRepo.findOne({ where: { doctorName: name } });
  }

  public async findDoctorsByIds(doctorIds: number[], requestFrom?: string): Promise<Doctor[]> {
    if (requestFrom == 'patient') {
      return await this.doctorRepo.find({ where: { doctorId: In(doctorIds) }, relations: ['patients'] });
    }
    else {
      return await this.doctorRepo.find({ where: { doctorId: In(doctorIds) } });
    }
  }

  public async findDoctorsBySpecialization(specialization: string): Promise<Doctor[]> {
    return await this.doctorRepo.find({ where: { speciality: specialization } });
  }

  public async updateDoctorById(doctorId: number, updateDoctorDto: UpdateDoctorDto): Promise<boolean> {
    const response = await this.doctorRepo.update(doctorId, updateDoctorDto);
    if (!response) {
      return false;
    }
    return true;
  }
}
