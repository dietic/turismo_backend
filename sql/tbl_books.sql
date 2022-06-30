-- Table: public.tbl_books

-- DROP TABLE IF EXISTS public.tbl_books;

CREATE TABLE IF NOT EXISTS public.tbl_books
(
    id bigint NOT NULL DEFAULT nextval('tbl_book_id_seq'::regclass),
    start_date timestamp with time zone NOT NULL,
    end_date timestamp with time zone NOT NULL,
                           people_quantity integer NOT NULL,
                           total_price double precision NOT NULL,
                           room_id integer NOT NULL,
                           payment_method_id integer NOT NULL,
                           customer_id integer NOT NULL,
                           CONSTRAINT tbl_book_pkey PRIMARY KEY (id),
    CONSTRAINT customer_id FOREIGN KEY (customer_id)
    REFERENCES public.tbl_customers (id) MATCH SIMPLE
                       ON UPDATE NO ACTION
                       ON DELETE NO ACTION,
    CONSTRAINT payment_method_id FOREIGN KEY (payment_method_id)
    REFERENCES public.tbl_payment_methods (id) MATCH SIMPLE
                       ON UPDATE NO ACTION
                       ON DELETE NO ACTION,
    CONSTRAINT room_id FOREIGN KEY (room_id)
    REFERENCES public.tbl_rooms (id) MATCH SIMPLE
                       ON UPDATE NO ACTION
                       ON DELETE NO ACTION
    )
                       WITH (
                           OIDS = FALSE
                           )
    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_books
    OWNER to turismo_admin;