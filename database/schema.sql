INSERT INTO users VALUES /* password: 123456 */
	(1, 'Lucas Sousa', 'lucasmag', '$2a$10$PlKmvxxviahACusfGE/KtOJRHFW0Q6YM8pnnNC1w5lDLDxU.qMPHO', current_timestamp, current_timestamp),
	(2, 'Salmo Cruz', 'salmo', '$2a$10$UDB/WEdJuepjv2eP.4qtlO/uk952XZDf0ieY5mu4/I02RbAOvTOs6', current_timestamp, current_timestamp);

INSERT INTO students VALUES
	(1, 'Aluno 1', '37489', current_timestamp, current_timestamp),
	(2, 'Aluno 2', '47593', current_timestamp, current_timestamp);

INSERT INTO patients VALUES
	(1, 'Paciente 1', '08028347562', '2837948295734', '88992637482', date '1997-10-05', current_timestamp, current_timestamp),
	(2, 'Paciente 2', '73984758354', '737499835629', '5198273642', 	date '2000-10-20', current_timestamp, current_timestamp);

INSERT INTO procedures VALUES
	(1, 'Limpeza', 'Limpeza completa de dentes', current_timestamp, current_timestamp),
	(2, 'Obturação', 'Obturação de dente', current_timestamp, current_timestamp),
	(3, 'Extração', 'Remoção de dente', current_timestamp, current_timestamp);

INSERT INTO appointments VALUES
	(1, 1, '37489', true, timestamp '2020-06-01 12:00:00', current_timestamp, current_timestamp),
	(2, 2, '47593', false, timestamp '2020-07-01 16:00:00', current_timestamp, current_timestamp);

INSERT INTO appointment_procedures VALUES
	(1, 1, 1, current_timestamp, current_timestamp),
	(2, 1, 2, current_timestamp, current_timestamp),
	(3, 2, 1, current_timestamp, current_timestamp),
	(4, 2, 2, current_timestamp, current_timestamp),
	(5, 2, 3, current_timestamp, current_timestamp);
