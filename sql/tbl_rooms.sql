-- Table: public.tbl_rooms

-- DROP TABLE IF EXISTS public.tbl_rooms;

CREATE TABLE IF NOT EXISTS public.tbl_rooms
(
    id bigint NOT NULL DEFAULT nextval('tbl_room_id_seq'::regclass),
    beds integer NOT NULL,
    "number" integer NOT NULL,
    state boolean NOT NULL DEFAULT false,
    price_per_night double precision NOT NULL,
    CONSTRAINT tbl_room_pkey PRIMARY KEY (id)
    )
    WITH (
        OIDS = FALSE
        )
    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_rooms
    OWNER to turismo_admin;