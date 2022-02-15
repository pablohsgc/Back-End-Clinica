-- Criacao de tabelas
create table Pessoa(
    codigo serial primary key,
    nome varchar(50) not null,
    email varchar(50) UNIQUE not null,
    telefone varchar(20) not null,
    cep varchar(8) not null,
    logradouro varchar(50) not null,
    bairro varchar(50) not null,
    cidade varchar(50) not null,
    estado varchar(50) not null
);

create table Funcionario(
    codigo integer primary key,
    dataContrato Date not null,
    salario numeric(6,2) not null,
    senhaHash varchar(30) not null,
    FOREIGN KEY (codigo) REFERENCES Pessoa (codigo)
);

create table Paciente(
    codigo integer primary key,
    altura numeric(3,2) not null,
    tipoSanguineo varchar(10) not null,
    peso numeric(3,1) not null,
    FOREIGN KEY (codigo) REFERENCES Pessoa (codigo)
);

create table Medico(
    codigo integer primary key,
    especialidade varchar(20) not null,
    crm numeric(6) UNIQUE not null,
    FOREIGN KEY (codigo) REFERENCES Funcionario (codigo)
);

create table HORARIO(
    hora numeric(2) primary key
);

create table Agenda(
    codigo serial primary key,
    dataConsulta date not null,
    horario numeric(2) not null,
    nome varchar(50) not null,
    email varchar(50) not null,
    telefone varchar(20) not null,
    codigoMedico integer not null,
    FOREIGN KEY (codigoMedico) REFERENCES Medico (codigo),
    FOREIGN KEY (horario) REFERENCES Horario (hora),
    CONSTRAINT consulta UNIQUE (dataConsulta,horario,codigoMedico) 
);

create table Endereco(
    cep varchar(8) primary key,
    logradouro varchar(50)not null,
    bairro varchar(50) not null,
    cidade varchar(50) not null,
    estado varchar(50) not null
);

insert into Horario values (7);
insert into Horario values (8);
insert into Horario values (9);
insert into Horario values (10);
insert into Horario values (11);
insert into Horario values (12);
insert into Horario values (13);
insert into Horario values (14);
insert into Horario values (15);
insert into Horario values (16);
insert into Horario values (17);

insert into Endereco (cep,logradouro,bairro,cidade,estado) values ('30260070','Avenida dos Andradas','Santa Efigênia','Belo Horizonte','Minas Gerais');
insert into Endereco (cep,logradouro,bairro,cidade,estado) values ('30260170','Rua Cardoso','Santa Efigênia','Belo Horizonte','Minas Gerais');

select * from endereco where cep='30260070';
select * from endereco;
--Inserts-------------------------

--Inserts em pessoa
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Pablo Henrique','email1@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Jose silva','email2@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Ricardo','email3@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Ana Gabriela','email4@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Cario Oliveira','email5@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Renan Lima','email6@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');

select * from Pessoa;

--Inserts em funcionario
insert into Funcionario values (1,current_date,3200,'senha123');
insert into Funcionario values (2,current_date,1000,'senha123');
insert into Funcionario values (3,current_date,2200,'senha123');

-- insert into Funcionario values (56,TO_DATE('31-05-2019','DD-MM-YYYY'),2200,'asdasd'); -- convertendo o formato da data, para o formato do banco de dados.

select * from funcionario;

select * from  PESSOA P join FUNCIONARIO F on P.codigo=F.codigo;

--Inserts em paciente
insert into Paciente values (4,1.80,'O+',84.2);
insert into Paciente values (5,1.60,'A-',65.0);
insert into Paciente values (6,1.72,'B+',70.3);

select * from Paciente;

select * from  PESSOA P join Paciente F on P.codigo=F.codigo; --projecao utilizando juncao

--Inserts em medico
insert into Medico values (1,'Cardiologista',102035);

select * from Medico;

select * from  PESSOA P join Funcionario F on P.codigo=F.codigo; --projecao utilizando juncao

select * from Pessoa P join Medico M on P.codigo=M.codigo join Funcionario F on P.codigo=F.codigo; -- projecao utilizando a juncao com medico, pessoa e funcionario

--Inserts em Agenda
insert into Agenda (dataConsulta, horario, nome, email, telefone, codigoMedico) values ($1,$2,$3,$4,$5,$6) RETURNING codigo;

select hora,dataconsulta,codigo,nome,codigomedico from agenda a right join horario h on a.horario = h.hora and a.dataconsulta='2021-02-21' and a.codigoMedico=44;
-- projecao da agenda de um medico para uma determinada data

select * from agenda a where a.dataconsulta='2021-02-21' and a.codigoMedico=44;
-- projecao de todas as consultas de um medico em uma determinada data

select h.hora from horario h except select a.horario from agenda a where a.dataconsulta='2021-02-21' and a.codigoMedico=44;
-- projecao de todos os horarios disponiveis de um medico em uma data

select h.hora from horario h except (select a.horario from agenda a where a.dataconsulta='2021-02-21' and a.codigoMedico=44) ORDER BY hora; 
-- mesma projecao da anterior porem de forma ordenada

drop table pessoa cascade;
drop table paciente cascade ;
drop table funcionario cascade ;
drop table medico cascade ;
drop table agenda cascade ;
drop table horario cascade ;
drop table endereco cascade ;