import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { HistoriasClinicas } from "../historias-clinicas";
import { HistoricosHistoriasClinicas } from "../historicos-historias-clinicas";

@Index("files_pkey", ["id"], { unique: true })
@Entity("files", { schema: "public" })
export class Files {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying", { name: "name", length: 255 })
    name: string;

    @Column("character varying", { name: "path", length: 5000 })
    path: string;

    @Column("character varying", { name: "key" })
    key: string;

    @Column("character varying", { name: "size", length: 20 })
    size: string;

    @Column("character varying", { name: "type", length: 100 })
    type: string;

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
      () => HistoriasClinicas,
      (historiasClinicas) => historiasClinicas.rayosXFile
    )
    historiasClinicas: HistoriasClinicas[];

    @OneToMany(
      () => HistoricosHistoriasClinicas,
      (historicosHistoriasClinicas) => historicosHistoriasClinicas.rayosXFile
    )
    historicosHistoriasClinicas: HistoricosHistoriasClinicas[];
}
