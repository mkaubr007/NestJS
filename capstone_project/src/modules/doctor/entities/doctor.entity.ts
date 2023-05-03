import { Length } from "class-validator";
import { Hospital } from "src/modules/hospital/entities/hospital.entity";
import { Observation } from "src/modules/observations/entities/observation.entity";
import { Patient } from "src/modules/patient/entities/patient.entity";
import { Test } from "src/modules/tests/entities/test.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('doctor')
export class Doctor extends BaseEntity {
    @PrimaryGeneratedColumn({ comment: 'Unique Id of the doctor' })
    doctorId: number;

    @Column({ type: 'varchar' })
    @Length(1, 9999)
    doctorName: string;

    @Column({ type: 'numeric' })
    @Length(1, 10)
    registrationNumber: number;

    @Column({ type: 'numeric' })
    @Length(1, 10)
    contactNumber: number;

    @CreateDateColumn()
    dateOfJoining?: Date;

    @Column({ type: 'varchar', default: 'General' })
    @Length(1, 9999)
    speciality?: string;

    @Column({ type: 'varchar' })
    @Length(1, 9999)
    emailId?: string;

    @ManyToMany(() => Patient, (patient) => patient.doctors)
    @JoinTable()
    patients?: Patient[];

    @ManyToOne(() => Hospital, (hospital) => hospital.doctor)
    hospital: Hospital;

    @OneToMany(() => Observation, (observation) => observation.doctorInCharge)
    observations?: Observation[];

    @OneToMany(() => Test, (medicalTest) => medicalTest.doctorInCharge)
    tests?: Test[];
}
