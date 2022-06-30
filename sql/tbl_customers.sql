-- Table: public.tbl_customers

-- DROP TABLE IF EXISTS public.tbl_customers;

CREATE TABLE IF NOT EXISTS public.tbl_customers
(
    id bigint NOT NULL DEFAULT nextval('tbl_customer_id_seq'::regclass),
    document_number text COLLATE pg_catalog."default" NOT NULL,
    first_name text COLLATE pg_catalog."default" NOT NULL,
    last_name text COLLATE pg_catalog."default" NOT NULL,
    phone bigint NOT NULL,
    address text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tbl_customer_pkey PRIMARY KEY (id)
    )
    WITH (
        OIDS = FALSE
        )
    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_customers
    OWNER to turismo_admin;