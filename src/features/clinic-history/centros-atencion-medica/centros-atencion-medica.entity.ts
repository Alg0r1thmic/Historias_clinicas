import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { HistoricosHistoriasClinicas } from "../historicos-historias-clinicas";
import { IpsPublicas } from "../ips-publicas";
import { TiposCentroAtencionMedica } from "../tipos-centro-atencion-medica";


@Index("centros_atencion_medica_pkey", ["id"], { unique: true })
@Entity("centros_atencion_medica", { schema: "public" })
export class CentrosAtencionMedica {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("numeric", { name: "latitud", nullable: true })
    latitud: string | null;

    @Column("numeric", { name: "longitud", nullable: true })
    longitud: string | null;

    @Column("character varying", { name: "direccion", length: 255 })
    direccion: string;

    @Column("character varying", { name: "telefono", length: 25 })
    telefono: string;

    @Column("character varying", { name: "nombre", length: 255 })
    nombre: string;

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
      () => TiposCentroAtencionMedica,
      (tiposCentroAtencionMedica) =>
        tiposCentroAtencionMedica.centrosAtencionMedicas
    )
    @JoinColumn([
      { name: "tipo_centro_atencion_medica_id", referencedColumnName: "id" },
    ])
    tipoCentroAtencionMedica: TiposCentroAtencionMedica;

    @OneToMany(
      () => HistoricosHistoriasClinicas,
      (historicosHistoriasClinicas) => historicosHistoriasClinicas.centroAtencion
    )
    historicosHistoriasClinicas: HistoricosHistoriasClinicas[];

    @OneToMany(
      () => IpsPublicas,
      (ipsPublicas) => ipsPublicas.centroAtencionMedica
    )
    ipsPublicas: IpsPublicas[];
}
