import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Hospital } from '../hospital/entities/hospital.entity';
import { HospitalService } from '../hospital/hospital.service';
import { Users } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ TypeOrmModule.forFeature([Doctor, Hospital, Users]) ],
  controllers: [DoctorController],
  providers: [DoctorService,HospitalService,UserService,JwtService]
})
export class DoctorModule {}
