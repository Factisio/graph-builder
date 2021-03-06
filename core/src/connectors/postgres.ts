import { Connector } from "./types";

export const connector: Connector = {
  // from https://www.prisma.io/docs/concepts/database-connectors/postgresql/#prisma-migrate
  typeReference: [
    {
      type: "preferred",
      databaseTypeName: "text",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.Text"
    },

    {
      type: "preferred",
      databaseTypeName: "boolean",
      graphqlTypeName: "Boolean",
      graphqlAnnotation: "db.Boolean"
    },
    {
      type: "supported",
      databaseTypeName: "bool",
      graphqlTypeName: "Boolean",
      graphqlAnnotation: "db.Bool"
    },

    {
      type: "supported",
      databaseTypeName: "smallint",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.SmallInt"
    },
    {
      type: "supported",
      databaseTypeName: "int2",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.Int2"
    },
    {
      type: "preferred",
      databaseTypeName: "integer",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.Integer"
    },
    {
      type: "supported",
      databaseTypeName: "int",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.Int"
    },
    {
      type: "supported",
      databaseTypeName: "int4",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.Int4"
    },
    {
      type: "preferred",
      databaseTypeName: "bigint",
      graphqlTypeName: "BigInt",
      graphqlAnnotation: "db.BigInt"
    },
    {
      type: "supported",
      databaseTypeName: "int8",
      graphqlTypeName: "BigInt",
      graphqlAnnotation: "db.Int8"
    },

    {
      type: "preferred",
      databaseTypeName: "double precision",
      graphqlTypeName: "Float",
      graphqlAnnotation: "db.DoublePrecision"
    },
    {
      type: "supported",
      databaseTypeName: "real",
      graphqlTypeName: "Float",
      graphqlAnnotation: "db.Real"
    },
    {
      type: "supported",
      databaseTypeName: "float",
      graphqlTypeName: "Float",
      graphqlAnnotation: "db.Float"
    },
    {
      type: "supported",
      databaseTypeName: "float4",
      graphqlTypeName: "Float",
      graphqlAnnotation: "db.Float4"
    },
    {
      type: "supported",
      databaseTypeName: "float8",
      graphqlTypeName: "Float",
      graphqlAnnotation: "db.Float8"
    },

    {
      type: "preferred",
      graphqlTypeName: "Decimal",
      databaseTypeName: "decimal(65,30)",
      graphqlAnnotation: "db.Decimal(65, 30)"
    },
    {
      type: "supported",
      databaseTypeName: "numeric(p,s)",
      graphqlTypeName: "Decimal",
      graphqlAnnotation: "db.Numeric(x, y)"
    },
    {
      type: "supported",
      databaseTypeName: "decimal(p,s)",
      graphqlTypeName: "Decimal",
      graphqlAnnotation: "db.Decimal(x, y)"
    },

    {
      type: "preferred",
      databaseTypeName: "timestamp(3)",
      graphqlTypeName: "DateTime",
      graphqlAnnotation: "db.TimeStamp(3)"
    },
    {
      type: "supported",
      databaseTypeName: "timestamp",
      graphqlTypeName: "DateTime",
      graphqlAnnotation: "db.TimeStamp"
    },
    {
      type: "supported",
      databaseTypeName: "date",
      graphqlTypeName: "DateTime",
      graphqlAnnotation: "db.Date"
    },
    {
      type: "supported",
      databaseTypeName: "timestamp with time zone",
      graphqlTypeName: "DateTime",
      graphqlAnnotation: "db.TimestamptWithTimeZone(x)"
    },
    {
      type: "supported",
      databaseTypeName: "timestamptz",
      graphqlTypeName: "DateTime",
      graphqlAnnotation: "db.Timestamptz(x)"
    },
    {
      type: "supported",
      databaseTypeName: "time without time zone",
      graphqlTypeName: "DateTime",
      graphqlAnnotation: "db.TimeWithoutTimeZone(x)"
    },
    {
      type: "supported",
      databaseTypeName: "time",
      graphqlTypeName: "DateTime",
      graphqlAnnotation: "db.Time(x)"
    },
    {
      type: "supported",
      databaseTypeName: "time with time zone",
      graphqlTypeName: "DateTime",
      graphqlAnnotation: "db.TimetWithTimeZone(x)"
    },
    {
      type: "supported",
      databaseTypeName: "timetz",
      graphqlTypeName: "DateTime",
      graphqlAnnotation: "db.Timetz(x)"
    },

    {
      type: "preferred",
      databaseTypeName: "jsonb",
      graphqlTypeName: "Json",
      graphqlAnnotation: "db.JsonB"
    },
    {
      type: "supported",
      databaseTypeName: "json",
      graphqlTypeName: "Json",
      graphqlAnnotation: "db.Json"
    },

    {
      type: "preferred",
      databaseTypeName: "bytea",
      graphqlTypeName: "Bytes",
      graphqlAnnotation: "db.ByteA"
    },

    {
      type: "supported",
      databaseTypeName: "smallserial",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.SmallSerial"
    },
    {
      type: "supported",
      databaseTypeName: "serial2",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.Serial2"
    },
    {
      type: "supported",
      databaseTypeName: "serial",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.Serial"
    },
    {
      type: "supported",
      databaseTypeName: "serial4",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.Serial4"
    },
    {
      type: "supported",
      databaseTypeName: "bigserial",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.BigSerial"
    },
    {
      type: "supported",
      databaseTypeName: "serial8",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.Serial8"
    },
    {
      type: "supported",
      databaseTypeName: "character(n)",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.Character(x)"
    },
    {
      type: "supported",
      databaseTypeName: "char(n)",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.Char(x)"
    },
    {
      type: "supported",
      databaseTypeName: "character varying(n)",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.VarChar(x)"
    },
    {
      type: "supported",
      databaseTypeName: "varchar(n)",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.CharacterVarying(x)"
    },
    {
      type: "supported",
      databaseTypeName: "money",
      graphqlTypeName: "Decimal",
      graphqlAnnotation: "db.Money"
    },

    {
      type: "supported",
      databaseTypeName: "enum",
      graphqlTypeName: "Enum",
      graphqlAnnotation: null
    },
    {
      type: "supported",
      databaseTypeName: "inet",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.Inet"
    },
    {
      type: "supported",
      databaseTypeName: "bit(n)",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.Bit(x)"
    },
    {
      type: "supported",
      databaseTypeName: "bit varying(n)",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.VarBit"
    },
    {
      type: "supported",
      databaseTypeName: "oid",
      graphqlTypeName: "Int",
      graphqlAnnotation: "db.Oid"
    },
    {
      type: "supported",
      databaseTypeName: "uuid",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.Uuid"
    },

    {
      type: "supported",
      databaseTypeName: "xml",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.Xml"
    },
    {
      type: "supported",
      databaseTypeName: "citext",
      graphqlTypeName: "String",
      graphqlAnnotation: "db.Citext"
    },
    { type: "unsupported", databaseTypeName: "interval" },
    { type: "unsupported", databaseTypeName: "cidr" },
    { type: "unsupported", databaseTypeName: "macaddr" },
    { type: "unsupported", databaseTypeName: "tsvector" },
    { type: "unsupported", databaseTypeName: "tsquery" },
    { type: "unsupported", databaseTypeName: "int4range" },
    { type: "unsupported", databaseTypeName: "int8range" },
    { type: "unsupported", databaseTypeName: "numrange" },
    { type: "unsupported", databaseTypeName: "tsrange" },
    { type: "unsupported", databaseTypeName: "tstzrange" },
    { type: "unsupported", databaseTypeName: "daterange" },
    { type: "unsupported", databaseTypeName: "point" },
    { type: "unsupported", databaseTypeName: "line" },
    { type: "unsupported", databaseTypeName: "lseg" },
    { type: "unsupported", databaseTypeName: "box" },
    { type: "unsupported", databaseTypeName: "path" },
    { type: "unsupported", databaseTypeName: "polygon" },
    { type: "unsupported", databaseTypeName: "circle" }
  ]
};
