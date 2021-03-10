import {
    Column,
    Entity,
    Index,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { HistoriasClinicas } from "../historias-clinicas";

@Index("pacientes_dni_correo_key", ["correo", "dni"], { unique: true })
@Index("pacientes_pkey", ["id"], { unique: true })
@Entity("pacientes", { schema: "public" })
export class Pacientes {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying", { name: "nombres", length: 100 })
    nombres: string;

    @Column("character varying", { name: "apellidos", length: 100 })
    apellidos: string;

    @Column("character varying", {
        name: "correo",
        nullable: true,
        unique: true,
        length: 50,
    })
    correo: string | null;

    @Column("character varying", {
        name: "direccion",
        nullable: true,
        length: 255,
    })
    direccion: string | null;

    @Column("character varying", { name: "sexo", length: 1 })
    sexo: string;

    @Column("date", { name: "fecha_nacimiento" })
    fechaNacimiento: string;

    @Column("character varying", { name: "dni", unique: true, length: 8 })
    dni: string;

    @Column("character varying", {
        name: "tipo_sangre",
        nullable: true,
        length: 5,
    })
    tipoSangre: string | null;

    @Column("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    })
    createdAt: Date;

    @Column("timestamp without time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    })
    updatedAt: Date;

    @Column("boolean", {
        name: "archived",
        nullable: true,
        default: () => "false",
    })
    archived: boolean | null;

    @Column("character varying", { name: "created_by", length: 255 })
    createdBy: string;

    @Column("character varying", {
        name: "updated_by",
        nullable: true,
        length: 255,
    })
    updatedBy: string | null;

    @OneToOne(
      () => HistoriasClinicas,
      (historiasClinicas) => historiasClinicas.paciente
    )
    historiasClinicas: HistoriasClinicas;
}
