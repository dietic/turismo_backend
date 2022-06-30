-- Table: public.tbl_receipts

-- DROP TABLE IF EXISTS public.tbl_receipts;

CREATE TABLE IF NOT EXISTS public.tbl_receipts
(
    id bigint NOT NULL DEFAULT nextval('tbl_receipt_id_seq'::regclass),
    total_price double precision NOT NULL,
    state boolean NOT NULL,
    book_id integer NOT NULL,
    CONSTRAINT tbl_receipt_pkey PRIMARY KEY (id),
    CONSTRAINT book_id FOREIGN KEY (book_id)
    REFERENCES public.tbl_books (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    )
    WITH (
        OIDS = FALSE
        )
    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_receipts
    OWNER to turismo_admin;