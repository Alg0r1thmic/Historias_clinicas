import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { CentrosAtencionMedica } from "../centros-atencion-medica";

@Index("ips_publicas_pkey", ["id"], { unique: true })
@Index("ips_publicas_ip_publica_key", ["ipPublica"], { unique: true })
@Entity("ips_publicas", { schema: "public" })
export class IpsPublicas {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying", { name: "ip_publica", unique: true, length: 25 })
    ipPublica: string;

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
      (centrosAtencionMedica) => centrosAtencionMedica.ipsPublicas
    )
    @JoinColumn([
      { name: "centro_atencion_medica_id", referencedColumnName: "id" },
    ])
    centroAtencionMedica: CentrosAtencionMedica;
}
