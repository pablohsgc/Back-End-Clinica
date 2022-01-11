-- Criacao de tabelas
create table Pessoa(
    codigo serial primary key,
    nome varchar(50),
    email varchar(30),
    telefone varchar(20),
    cep varchar(8),
    logradouro varchar(50),
    bairro varchar(50),
    cidade varchar(50),
    estado varchar(50)
);

create table Funcionario(
    codigo integer primary key,
    dataContrato Date,
    salario numeric(6,2),
    senhaHash varchar(30),
    FOREIGN KEY (codigo) REFERENCES Pessoa (codigo)
);

create table Paciente(
    codigo integer primary key,
    altura numeric(3,2),
    tipoSanguineo varchar(10),
    peso numeric(3,1),
    FOREIGN KEY (codigo) REFERENCES Pessoa (codigo)
);

create table Medico(
    codigo integer primary key,
    especialidade varchar(20),
    crm numeric(6),
    FOREIGN KEY (codigo) REFERENCES Funcionario (codigo)
);

create table Agenda(
    codigo integer primary key,
    dataConsulta date not null,
    horario varchar(5) not null,
    nome varchar(50) not null,
    email varchar(30),
    telefone varchar(20),
    codigoMedico numeric(11),
    FOREIGN KEY (codigo) REFERENCES Medico (codigo)
);

create table Endereco(
    cep varchar(8) primary key,
    logradouro varchar(50),
    bairro varchar(50),
    cidade varchar(50),
    estado varchar(50)
);

insert into Endereco (cep,logradouro,bairro,cidade,estado) values ('30260070','Avenida dos Andradas','Santa Efigênia','Belo Horizonte','Minas Gerais');
insert into Endereco (cep,logradouro,bairro,cidade,estado) values ('30260170','Rua Cardoso','Santa Efigênia','Belo Horizonte','Minas Gerais');

select * from endereco where cep='30260070';
select * from endereco;
--Inserts-------------------------

--Inserts em pessoa
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Pablo Henrique','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Jose silva','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Ricardo','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Ana Gabriela','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Cario Oliveira','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ('Renan Lima','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');

select * from Pessoa;

--Inserts em funcionario
insert into Funcionario values (1,current_date,3200,'asdasd');
insert into Funcionario values (2,current_date,1000,'asdasd');
insert into Funcionario values (3,current_date,2200,'asdasd');

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


drop table pessoa cascade;
drop table paciente cascade ;
drop table funcionario cascade ;
drop table medico cascade ;
drop table agenda cascade ;