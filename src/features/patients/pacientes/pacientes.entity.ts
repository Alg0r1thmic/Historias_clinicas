import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pacientes_pkey", ["id"], { unique: true })
@Entity("pacientes", { schema: "public" })
export class Pacientes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Column("character varying", { name: "apellido", length: 255 })
  apellido: string;

  @Column("character varying", { name: "correo", length: 255 })
  correo: string;

  @Column("character varying", { name: "direccion", length: 255 })
  direccion: string;

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
}
