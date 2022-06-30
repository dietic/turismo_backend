-- Table: public.tbl_payment_methods

-- DROP TABLE IF EXISTS public.tbl_payment_methods;

CREATE TABLE IF NOT EXISTS public.tbl_payment_methods
(
    id bigint NOT NULL DEFAULT nextval('tbl_payment_method_id_seq'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tbl_payment_method_pkey PRIMARY KEY (id)
    )
    WITH (
        OIDS = FALSE
        )
    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_payment_methods
    OWNER to turismo_admin;