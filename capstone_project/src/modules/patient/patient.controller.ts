import { Controller, Get, Post, Body, Param, UseGuards, Put, HttpException, HttpStatus } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Patient } from './entities/patient.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Patient')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Successfully adds a new patient', type: Patient })
  @ApiBadRequestResponse({ description: 'Failed to add a new patient' })
  public async addPatient(@Body() createPatientDto: CreatePatientDto): Promise<boolean> {
    try {
      return await this.patientService.addPatient(createPatientDto);
    }
    catch(error) {
      throw new HttpException(`Server response failed! Details: ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOkResponse({ description: 'Successfully returns all patients', type: [Patient] })
  @ApiBadRequestResponse({ description: 'Failed to return patients' })
  public async findAllPatients(): Promise<Patient[]> {
    try {
      return await this.patientService.findAllPatients();
    }
    catch(error) {
      throw new HttpException(`Server response failed! Details: ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Successfully returns the patient by matching ID', type: Patient })
  @ApiBadRequestResponse({ description: 'Failed to return the patient by ID' })
  public async findOnePatientById(@Param('id') id: string | number) {
    try {
      return this.patientService.findOnePatientById(+id);
    }
    catch(error) {
      throw new HttpException(`Server response failed! Details: ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('get-patients-by-doctorId/:doctorId')
  @ApiOkResponse({ description: 'Successfully returns patients by matching the doctor ID', type: [Patient] })
  @ApiBadRequestResponse({ description: 'Failed to return patients' })
  public async findPatientsByDoctorId(@Param('doctorId') doctorId: string | number): Promise<Patient[]> {
    try {
      return await this.patientService.findPatientsByDoctorId(Number(doctorId));
    }
    catch(error) {
      throw new HttpException(`Server response failed! Details: ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Successfully updates the details of a patient', type: Boolean })
  @ApiBadRequestResponse({ description: 'Failed to update the details of a patient' })
  public async updatePatientById(@Param('id') id: string | number, @Body() updatePatientDto: UpdatePatientDto): Promise<boolean> {
    try {
      const patientId = typeof(id) == 'string' ? Number(id) : id;
      return await this.patientService.updatePatientById(patientId, updatePatientDto);
    }
    catch(error) {
      throw new HttpException(`Server response failed! Details: ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
