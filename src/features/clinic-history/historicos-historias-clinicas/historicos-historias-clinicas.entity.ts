import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { CentrosAtencionMedica } from "../centros-atencion-medica";
import { Files } from "../files";
import { HistoriasClinicas } from "../historias-clinicas";

  
  @Index("historicos_historias_clinicas_pkey", ["id"], { unique: true })
  @Entity("historicos_historias_clinicas", { schema: "public" })
  export class HistoricosHistoriasClinicas {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;
  
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
  
    @ManyToOne(
      () => CentrosAtencionMedica,
      (centrosAtencionMedica) => centrosAtencionMedica.historicosHistoriasClinicas
    )
    @JoinColumn([{ name: "centro_atencion_id", referencedColumnName: "id" }])
    centroAtencion: CentrosAtencionMedica;
  
    @ManyToOne(
      () => HistoriasClinicas,
      (historiasClinicas) => historiasClinicas.historicosHistoriasClinicas
    )
    @JoinColumn([{ name: "historia_clinica_id", referencedColumnName: "id" }])
    historiaClinica: HistoriasClinicas;
  
    @ManyToOne(() => Files, (files) => files.historicosHistoriasClinicas)
    @JoinColumn([{ name: "rayos_x_file_id", referencedColumnName: "id" }])
    rayosXFile: Files;
  }
  