PGDMP                      }            postgres    17.2    17.2 J    ~           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    5    postgres    DATABASE     {   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';
    DROP DATABASE postgres;
                     postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                        postgres    false    4993                        2615    17957    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     postgres    false            �            1259    17958    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap r       postgres    false    5            �            1259    17970    dns_servers    TABLE     �   CREATE TABLE public.dns_servers (
    id integer NOT NULL,
    ip_address character varying(50) NOT NULL,
    url character varying(255),
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.dns_servers;
       public         heap r       postgres    false    5            �            1259    17969    dns_servers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.dns_servers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.dns_servers_id_seq;
       public               postgres    false    5    219            �           0    0    dns_servers_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.dns_servers_id_seq OWNED BY public.dns_servers.id;
          public               postgres    false    218            �            1259    17977    domain_dns_server    TABLE     �   CREATE TABLE public.domain_dns_server (
    domain_id integer NOT NULL,
    dns_server_id integer NOT NULL,
    status_id integer DEFAULT 1 NOT NULL,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
 %   DROP TABLE public.domain_dns_server;
       public         heap r       postgres    false    5            �            1259    17985    domains    TABLE     �   CREATE TABLE public.domains (
    id integer NOT NULL,
    user_id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.domains;
       public         heap r       postgres    false    5            �            1259    17984    domains_id_seq    SEQUENCE     �   CREATE SEQUENCE public.domains_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.domains_id_seq;
       public               postgres    false    222    5            �           0    0    domains_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.domains_id_seq OWNED BY public.domains.id;
          public               postgres    false    221            �            1259    17993    record_type    TABLE     f   CREATE TABLE public.record_type (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);
    DROP TABLE public.record_type;
       public         heap r       postgres    false    5            �            1259    17992    record_type_id_seq    SEQUENCE     �   CREATE SEQUENCE public.record_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.record_type_id_seq;
       public               postgres    false    5    224            �           0    0    record_type_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.record_type_id_seq OWNED BY public.record_type.id;
          public               postgres    false    223            �            1259    18000    records    TABLE     X  CREATE TABLE public.records (
    id integer NOT NULL,
    domain_id integer NOT NULL,
    record_name character varying(255) NOT NULL,
    target character varying(255) NOT NULL,
    priority integer,
    ttl integer DEFAULT 3600,
    record_type_id integer NOT NULL,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.records;
       public         heap r       postgres    false    5            �            1259    17999    records_id_seq    SEQUENCE     �   CREATE SEQUENCE public.records_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.records_id_seq;
       public               postgres    false    226    5            �           0    0    records_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.records_id_seq OWNED BY public.records.id;
          public               postgres    false    225            �            1259    18011    role    TABLE     `   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.role;
       public         heap r       postgres    false    5            �            1259    18010    role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public               postgres    false    5    228            �           0    0    role_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;
          public               postgres    false    227            �            1259    18018    status    TABLE     a   CREATE TABLE public.status (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);
    DROP TABLE public.status;
       public         heap r       postgres    false    5            �            1259    18017    status_id_seq    SEQUENCE     �   CREATE SEQUENCE public.status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.status_id_seq;
       public               postgres    false    5    230            �           0    0    status_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.status_id_seq OWNED BY public.status.id;
          public               postgres    false    229            �            1259    18025    users    TABLE     `  CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    last_name character varying(255),
    first_name character varying(255),
    email character varying(255),
    password character varying(255) NOT NULL,
    role_id integer,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public         heap r       postgres    false    5            �            1259    18024    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    232    5            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    231            �           2604    17973    dns_servers id    DEFAULT     p   ALTER TABLE ONLY public.dns_servers ALTER COLUMN id SET DEFAULT nextval('public.dns_servers_id_seq'::regclass);
 =   ALTER TABLE public.dns_servers ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    219    219            �           2604    17988 
   domains id    DEFAULT     h   ALTER TABLE ONLY public.domains ALTER COLUMN id SET DEFAULT nextval('public.domains_id_seq'::regclass);
 9   ALTER TABLE public.domains ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    222    222            �           2604    17996    record_type id    DEFAULT     p   ALTER TABLE ONLY public.record_type ALTER COLUMN id SET DEFAULT nextval('public.record_type_id_seq'::regclass);
 =   ALTER TABLE public.record_type ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    223    224            �           2604    18003 
   records id    DEFAULT     h   ALTER TABLE ONLY public.records ALTER COLUMN id SET DEFAULT nextval('public.records_id_seq'::regclass);
 9   ALTER TABLE public.records ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    225    226    226            �           2604    18014    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    228    227    228            �           2604    18021 	   status id    DEFAULT     f   ALTER TABLE ONLY public.status ALTER COLUMN id SET DEFAULT nextval('public.status_id_seq'::regclass);
 8   ALTER TABLE public.status ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    229    230    230            �           2604    18028    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    231    232    232            l          0    17958    _prisma_migrations 
   TABLE DATA                 public               postgres    false    217   ZS       n          0    17970    dns_servers 
   TABLE DATA                 public               postgres    false    219   4T       o          0    17977    domain_dns_server 
   TABLE DATA                 public               postgres    false    220   �T       q          0    17985    domains 
   TABLE DATA                 public               postgres    false    222   �T       s          0    17993    record_type 
   TABLE DATA                 public               postgres    false    224   �U       u          0    18000    records 
   TABLE DATA                 public               postgres    false    226   -V       w          0    18011    role 
   TABLE DATA                 public               postgres    false    228   �W       y          0    18018    status 
   TABLE DATA                 public               postgres    false    230   X       {          0    18025    users 
   TABLE DATA                 public               postgres    false    232   tX       �           0    0    dns_servers_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.dns_servers_id_seq', 3, true);
          public               postgres    false    218            �           0    0    domains_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.domains_id_seq', 16, true);
          public               postgres    false    221            �           0    0    record_type_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.record_type_id_seq', 5, true);
          public               postgres    false    223            �           0    0    records_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.records_id_seq', 16, true);
          public               postgres    false    225            �           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 2, true);
          public               postgres    false    227            �           0    0    status_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.status_id_seq', 3, true);
          public               postgres    false    229            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 13, true);
          public               postgres    false    231            �           2606    17966 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public                 postgres    false    217            �           2606    17976    dns_servers dns_servers_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.dns_servers
    ADD CONSTRAINT dns_servers_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.dns_servers DROP CONSTRAINT dns_servers_pkey;
       public                 postgres    false    219            �           2606    17983 (   domain_dns_server domain_dns_server_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.domain_dns_server
    ADD CONSTRAINT domain_dns_server_pkey PRIMARY KEY (domain_id, dns_server_id);
 R   ALTER TABLE ONLY public.domain_dns_server DROP CONSTRAINT domain_dns_server_pkey;
       public                 postgres    false    220    220            �           2606    17991    domains domains_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.domains
    ADD CONSTRAINT domains_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.domains DROP CONSTRAINT domains_pkey;
       public                 postgres    false    222            �           2606    17998    record_type record_type_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.record_type
    ADD CONSTRAINT record_type_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.record_type DROP CONSTRAINT record_type_pkey;
       public                 postgres    false    224            �           2606    18009    records records_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.records DROP CONSTRAINT records_pkey;
       public                 postgres    false    226            �           2606    18016    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public                 postgres    false    228            �           2606    18023    status status_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.status DROP CONSTRAINT status_pkey;
       public                 postgres    false    230            �           2606    18033    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    232            �           1259    18034    dns_servers_ip_address_key    INDEX     _   CREATE UNIQUE INDEX dns_servers_ip_address_key ON public.dns_servers USING btree (ip_address);
 .   DROP INDEX public.dns_servers_ip_address_key;
       public                 postgres    false    219            �           1259    18035    domains_name_key    INDEX     K   CREATE UNIQUE INDEX domains_name_key ON public.domains USING btree (name);
 $   DROP INDEX public.domains_name_key;
       public                 postgres    false    222            �           1259    18036    record_type_name_key    INDEX     S   CREATE UNIQUE INDEX record_type_name_key ON public.record_type USING btree (name);
 (   DROP INDEX public.record_type_name_key;
       public                 postgres    false    224            �           1259    18037    role_name_key    INDEX     E   CREATE UNIQUE INDEX role_name_key ON public.role USING btree (name);
 !   DROP INDEX public.role_name_key;
       public                 postgres    false    228            �           1259    18038    status_name_key    INDEX     I   CREATE UNIQUE INDEX status_name_key ON public.status USING btree (name);
 #   DROP INDEX public.status_name_key;
       public                 postgres    false    230            �           1259    18039    users_username_key    INDEX     O   CREATE UNIQUE INDEX users_username_key ON public.users USING btree (username);
 &   DROP INDEX public.users_username_key;
       public                 postgres    false    232            �           2606    18040 6   domain_dns_server domain_dns_server_dns_server_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.domain_dns_server
    ADD CONSTRAINT domain_dns_server_dns_server_id_fkey FOREIGN KEY (dns_server_id) REFERENCES public.dns_servers(id) ON DELETE CASCADE;
 `   ALTER TABLE ONLY public.domain_dns_server DROP CONSTRAINT domain_dns_server_dns_server_id_fkey;
       public               postgres    false    219    220    4800            �           2606    18045 2   domain_dns_server domain_dns_server_domain_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.domain_dns_server
    ADD CONSTRAINT domain_dns_server_domain_id_fkey FOREIGN KEY (domain_id) REFERENCES public.domains(id) ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.domain_dns_server DROP CONSTRAINT domain_dns_server_domain_id_fkey;
       public               postgres    false    4805    222    220            �           2606    18050 2   domain_dns_server domain_dns_server_status_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.domain_dns_server
    ADD CONSTRAINT domain_dns_server_status_id_fkey FOREIGN KEY (status_id) REFERENCES public.status(id) ON DELETE SET NULL;
 \   ALTER TABLE ONLY public.domain_dns_server DROP CONSTRAINT domain_dns_server_status_id_fkey;
       public               postgres    false    220    230    4816            �           2606    18055    domains domains_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.domains
    ADD CONSTRAINT domains_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.domains DROP CONSTRAINT domains_user_id_fkey;
       public               postgres    false    4818    232    222            �           2606    18060    records records_domain_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_domain_id_fkey FOREIGN KEY (domain_id) REFERENCES public.domains(id) ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.records DROP CONSTRAINT records_domain_id_fkey;
       public               postgres    false    222    226    4805            �           2606    18065 #   records records_record_type_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_record_type_id_fkey FOREIGN KEY (record_type_id) REFERENCES public.record_type(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.records DROP CONSTRAINT records_record_type_id_fkey;
       public               postgres    false    226    4808    224            �           2606    18070    users users_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(id) ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_role_id_fkey;
       public               postgres    false    4813    232    228            l   �   x�m̽j1���B�%$2�+iW��.����t� �c;��]`�b�M�]�Ԧ߽��w:ּ.�z;��T?��^��7ux���zj')����vt:N�EL&�����%�#���	�$1�ӈ,�����0tMq$��8��%��fX#(���%ɂ������P��>�������6>�����A�      n   �   x���v
Q���W((M��L�K�+�/N-*K-*Vs�	uV�0�QP��Cu 3�����J_�T/=??='$jd`d�k`�kh�`hdebhej�gja`bi��i��I�MF@���٦��Ҕ��ĢT]�����T��h��"�XX��b���ZB�".. óX,      o   
   x���          q   �   x���O�@�bn[�.�#��:x� ���A3Z���٥.u���x0I�ŧ�4?�}*�������e8�l$VԽm۱��3[���z�J$j_j
�)Ŷ;'�#6��!��j���4�L�����k�jr����ƘO��F��'&������*�D"�`��	9&��      s   ^   x���v
Q���W((M��L�+JM�/J�/�,HUs�	uV�0�QPwT״��$N�P�����+	z��z|#H�`�B�S�7� ��� ��J�      u   ~  x���]k�0�����6�M�/d�B��ۭ��@��Z��~�Z��R�6�H��p�{�����bEf��)� �!-�0/���M�^�Kr}�,k��[�CN���Qh>Y�8c�g\،��p�_H*�µ�G���$�:�҉uܩ�R�Uz�0O�[8!H��(Ue�Bw�����F�gyc��s[�kو�k����)�����UWq	Q��5;v���&x�\��er��������,L�(��k��HD�T�`�n�R��t,u�IF,"I;�:�1�@��fØ�r_:|xN&�p4��,�p�QgP�z8?jU�l�oQ�(�1�5�Qpu
i����!57�(���y�TF�X3${1A�RϏ�̿>����^�ZoՂ      w   C   x���v
Q���W((M��L�+��IUs�	uV�0�QPOL���S״��$�����8���� �,      y   V   x���v
Q���W((M��L�+.I,)-Vs�	uV�0�QP��KL.�,KU״��$������@��y
���y%�y�y�`}\\ �I/�      {   �  x���[��F ���>L�$UY��暗�(�T�7.-� �M��ԭ��8��˲G��:}����[��������!��Y��L�}�����f�Qpx�-
r�	:������r��
��0��Q���+ _�"��ϭ�LBe�=�a�lɕY�!/�ծ< V�ͥv1s۷��U�o�
IH#�7@� h��9�"���?_�_�a}7��W�xF�]�5��z�%�n��`�Z����%�fL'��vA���=��tk���j��a�z>��j�s�Fӵ=�;ۍ?W�Eg&��@��p7rs����:�#=XMZ���� <���e�w�Y��5�o�կ[}�ލ6��'�X����\�lj�\�����@c�^TP%D),p��XO��z��	��O�z~�3��݂�C�i����Zx41����#�D{�:����-�1�m7��:�-z҃��"G0z
����a_I_wf^��!��A'(����j/������ge�ӓ��+x>���&-P��)&�lX����"�~���lWMS3�O�����v*=[���6:c3�pg.��YS3�6����E���f�br͖�};:�,��w��S����|D���E�������Л��"��Yon`�w�0�R6=�l��G��R����|=��L���N��Y�*��.���/�I�A�#�(Z��h1��53�u�kBvF6V�Kr N�(���M���e@R �@���@6��6��G��_����ͼy�e��3���ɉJE��[�%�@g�^�=/�I+K�������@�6�z�n�[K�Gx|�4���\�t�8�lscDdp򋁺.M}ɱ�FR�̆�6�+��g>F�m�}���C��:�[	�s��>��
��%�R��dP���6�*����+ĪmI��Ճ�m����\���Ui;ec���}-�:���}g�{^;���Xc�x�]wT�����vf4JW��U>D�`4`W�[����h�W����N�{     