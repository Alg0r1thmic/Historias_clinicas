import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Files } from "../files";
import { HistoricosHistoriasClinicas } from "../historicos-historias-clinicas";
import { Pacientes } from "../pacientes";

@Index("historias_clinicas_pkey", ["id"], { unique: true })
@Index("historias_clinicas_paciente_id_key", ["pacienteId"], { unique: true })
@Entity("historias_clinicas", { schema: "public" })
export class HistoriasClinicas {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("integer", { name: "paciente_id", unique: true })
    pacienteId: number;

    @Column("numeric", { name: "talla", nullable: true })
    talla: string | null;

    @Column("numeric", { name: "peso", nullable: true })
    peso: string | null;

    @Column("character varying", { name: "diagnostico", nullable: true })
    diagnostico: string | null;

    @Column("character varying", { name: "antecedentes", nullable: true })
    antecedentes: string | null;

    @Column("character varying", { name: "motivo_consula", nullable: true })
    motivoConsula: string | null;

    @Column("character varying", { name: "enfermedades", nullable: true })
    enfermedades: string | null;

    @Column("character varying", { name: "emoglobina", nullable: true })
    emoglobina: string | null;

    @Column("character varying", { name: "trigliceridos", nullable: true })
    trigliceridos: string | null;

    @Column("character varying", {
        name: "responsable",
        nullable: true,
        length: 255,
    })
    responsable: string | null;

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

    @OneToOne(() => Pacientes, (pacientes) => pacientes.historiasClinicas)
    @JoinColumn([{ name: "paciente_id", referencedColumnName: "id" }])
    paciente: Pacientes;

    @ManyToOne(() => Files, (files) => files.historiasClinicas)
    @JoinColumn([{ name: "rayos_x_file_id", referencedColumnName: "id" }])
    rayosXFile: Files;

    @OneToMany(
      () => HistoricosHistoriasClinicas,
      (historicosHistoriasClinicas) => historicosHistoriasClinicas.historiaClinica
    )
    historicosHistoriasClinicas: HistoricosHistoriasClinicas[];
}
