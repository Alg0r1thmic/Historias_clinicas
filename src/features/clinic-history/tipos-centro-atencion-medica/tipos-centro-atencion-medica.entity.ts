import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { CentrosAtencionMedica } from "../centros-atencion-medica";

@Index("tipos_centro_atencion_medica_pkey", ["id"], { unique: true })
@Entity("tipos_centro_atencion_medica", { schema: "public" })
export class TiposCentroAtencionMedica {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying", { name: "descripcion", length: 255 })
    descripcion: string;

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

    @OneToMany(
        () => CentrosAtencionMedica,
        (centrosAtencionMedica) => centrosAtencionMedica.tipoCentroAtencionMedica
    )
    centrosAtencionMedicas: CentrosAtencionMedica[];
}
