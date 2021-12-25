create table Pessoa(
    codigo numeric(10) primary key,
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
    codigo numeric(10) primary key,
    dataContrato Date,
    salario numeric(6,2),
    senhaHash varchar(30),
    FOREIGN KEY (codigo) REFERENCES Pessoa (codigo)
);

create table Paciente(
    codigo numeric(10) primary key,
    altura numeric(3,2),
    tipoSanguineo varchar(10),
    peso numeric(3,1),
    FOREIGN KEY (codigo) REFERENCES Pessoa (codigo)
);

create table Medico(
    codigo numeric(10) primary key,
    especialidade varchar(20),
    crm numeric(6),
    FOREIGN KEY (codigo) REFERENCES Funcionario (codigo)
);


--Inserts-------------------------

--Inserts em pessoa
insert into Pessoa values (1,'Pablo Henrique','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa values (2,'Jose silva','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa values (3,'Ricardo','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa values (4,'Ana Gabriela','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa values (5,'Cario Oliveira','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');
insert into Pessoa values (6,'Renan Lima','email@gmail.com','99999999999','88888888','rua qualquer','bairro qualquer','belo horizonte','minas gerais');

select * from Pessoa;

--Inserts em funcionario
insert into Funcionario values (1,sysdate,3200,'asdasd');
insert into Funcionario values (2,sysdate,1000,'asdasd');
insert into Funcionario values (3,sysdate,2200,'asdasd');

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

create table Agenda(
    codigo,
    data,
    horario,
    nome,
    email,
    telefone,
    codigoMedico,
);