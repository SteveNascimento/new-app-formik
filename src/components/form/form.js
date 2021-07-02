import React, { useState } from 'react'
import * as Service from '../../services/submit-service'
import { Button } from 'antd';
import { Formik } from 'formik'
import { Form } from 'formik-antd'
import './form.css'

import { validationSchema } from './validationSchema'
import { defaultValues } from './defaultValues'

import FormResInt from './sections/formResInt'


export default function Forms() {

    const [sending, setSending] = useState(false);

    const data = {
        name: "Steve"
    }

    const submit = async () => {
        setSending(true)
        await Service.submitForm(data)
        setSending(false)
    }

    return (

        <div>
            <Formik initialValues={defaultValues} validationSchema={validationSchema}>
                {({ isValid }) => (
                    <Form>
                        <h2 style={{ textAlign: "center", margin: "20px" }}>
                            Guia de Resumo de Internação
                        </h2>
                        <FormResInt />
                        {/* <section id="dados-do-beneficiario">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Dados do Beneficiário</Divider>
                            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="8 - Número da Carteira" >
                                    <MyTextInput name="numCart" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="9 - Validade da Carteira" >
                                    <MyTextInput name="valCart" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="10 - Nome" >
                                    <MyTextInput name="nomeBenef" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="11 - Cartão Nacional de Saúde" >
                                    <MyTextInput name="cartNacSaud" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="12 - Atendimento a RN" >
                                    <Select
                                        name="atARN"
                                        placeholder="Atendimento a RN"
                                    >
                                        <Select.Option value={true}>Sim</Select.Option>
                                        <Select.Option value={false}>Não</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                            </Descriptions>
                        </section>
                        <section id="dados-do-contratado-executante">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Dados do Contratado Executante</Divider>
                            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="13 - Código na Operadora/CNPJ">
                                    09306242000344
                                </Descriptions.Item>
                                <Descriptions.Item label="14 - Nome do Contratado" >
                                    <MyTextInput name="nomeCont" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="15 - Código CNES">
                                    7730802
                                </Descriptions.Item>
                            </Descriptions>
                        </section>
                        <section id="dados-da-internacao">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Dados da Internação</Divider>
                            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="16 - Caráter Internação" >
                                    <Select
                                        name="carInt"
                                        placeholder="Caráter Internação"
                                    >
                                        <Select.Option value="E-Eletiva">E-Eletiva</Select.Option>
                                        <Select.Option value="U-Urgencia/Emergencia">U-Urgencia/Emergencia</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="17 - Tipo de Faturamento" >
                                    <Select
                                        name="tipoFat"
                                        placeholder="Tipo de Faturamento"
                                    >
                                        <Select.Option value={1}>1 - Parcial</Select.Option>
                                        <Select.Option value={2}>2 - Final</Select.Option>
                                        <Select.Option value={3}>3 - Complementar</Select.Option>
                                        <Select.Option value={4}>4 - Total</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="18 - Data e Hora do Faturamento" >
                                    <TimePicker name="horaInicFat" placeholder="Hora" />
                                    <DatePicker name="dataInicFat" placeholder="Data" />
                                </Descriptions.Item>
                                <Descriptions.Item label="20 - Data e Hora Fim do Faturamento" >
                                    <TimePicker name="horaFimFat" placeholder="Hora" />
                                    <DatePicker name="dataFimFat" placeholder="Data" />
                                </Descriptions.Item>
                                <Descriptions.Item label="22 - Tipo de Internação" >
                                    <Select
                                        name="tipoInt"
                                        placeholder="Tipo de Internação"
                                    >
                                        <Select.Option value={1}>1 - Cínica</Select.Option>
                                        <Select.Option value={2}>2 - Cirúrgica</Select.Option>
                                        <Select.Option value={3}>3 - Obstétrica</Select.Option>
                                        <Select.Option value={4}>4 - Pediátrica</Select.Option>
                                        <Select.Option value={5}>5 - Psiquiátrica</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="23 - Regime de Internação" >
                                    <Select
                                        name="regimeInt"
                                        placeholder="Regime de Internação"
                                    >
                                        <Select.Option value={1}>1 - Hospitalar</Select.Option>
                                        <Select.Option value={2}>2 - Hospital-dia</Select.Option>
                                        <Select.Option value={3}>3 - Domiciliar</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="24 - CID10" >
                                    <MyTextInput name="cid10" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="25 - CID10 (2)" >
                                    <MyTextInput name="cid102" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="26 - CID10 (3)" >
                                    <MyTextInput name="cid103" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="27 - CID10 (4)" >
                                    <MyTextInput name="cid104" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="28 - Indicação de Acidente (Acidente ou doença relacionada)" >
                                    <Select
                                        name="indDeAcid"
                                        placeholder="Indicação de Acidente"
                                    >
                                        <Select.Option value={0}>0 - Trabalho</Select.Option>
                                        <Select.Option value={1}>1 - Trânsito</Select.Option>
                                        <Select.Option value={2}>2 - Outros Acidentes</Select.Option>
                                        <Select.Option value={9}>9 - Não Acidentes</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="29 - Motivo de Encerramento da Internação " >
                                    <Select
                                        name="motivDeEncer"
                                        placeholder="Motivo de Encerramento"
                                    >
                                        <Select.Option value={11}>11 - Alta Curado</Select.Option>
                                        <Select.Option value={12}>12 - Alta Melhorado</Select.Option>
                                        <Select.Option value={14}>14 - Alta a pedido</Select.Option>
                                        <Select.Option value={15}>15 - Alta com previsão de retorno para acompanhamento do paciente</Select.Option>
                                        <Select.Option value={16}>16 - Alta por Evasão</Select.Option>
                                        <Select.Option value={17}>17 - Alta da Puérpera e recém-nascido</Select.Option>
                                        <Select.Option value={18}>18 - Alta por Outros motivos</Select.Option>
                                        <Select.Option value={21}>21 - Permanencia por características próprias da doença</Select.Option>
                                        <Select.Option value={22}>22 - Permanencia por Intercorrência</Select.Option>
                                        <Select.Option value={23}>23 - Permanencia por impossibilidade sócio-familiar</Select.Option>
                                        <Select.Option value={'24 - permanencia por Processo de doação de órgãos'}>24 - permanencia por Processo de doação de órgãos</Select.Option>
                                        <Select.Option value={24}> tecidos e células - doador vivo</Select.Option>
                                        <Select.Option value={'25 - Permanencia por Processo de doação de órgãos'}>25 - Permanencia por Processo de doação de órgãos</Select.Option>
                                        <Select.Option value={25}> tecidos e células - doador morto</Select.Option>
                                        <Select.Option value={26}>26 - Permanencia por mudança de procedimento</Select.Option>
                                        <Select.Option value={27}>27 - Permanencia por re-operação</Select.Option>
                                        <Select.Option value={28}>28 - Permanencia por outros motivos</Select.Option>
                                        <Select.Option value={31}>31 - Transferido para outro estabelecimento</Select.Option>
                                        <Select.Option value={32}>32 - Transferencia para internação domiciliar</Select.Option>
                                        <Select.Option value={41}>41 - Óbito com declaração de óbito fornecida pelo médico assistente</Select.Option>
                                        <Select.Option value={42}>42 - Óbito com declaração de Óbito fornecida pelo Instituto Médico Legal - IML</Select.Option>
                                        <Select.Option value={43}>43 - Óbito com declaração de Óbito fornecida pelo Serviço de Verificação de Óbito - SVO.</Select.Option>
                                        <Select.Option value={51}>51 - ENCERRAMENTO ADMINISTRATIVO</Select.Option>
                                        <Select.Option value={61}>61 - Alta mãe/puerpera e do recem nascido</Select.Option>
                                        <Select.Option value={62}>62 - Alta mãe/puerpera e permanencia do recem-nascido</Select.Option>
                                        <Select.Option value={63}>63 - Alta mãe/puerpera e obito do recem-nascido</Select.Option>
                                        <Select.Option value={64}>64 - Alta mãe/puerpera com obito fetal</Select.Option>
                                        <Select.Option value={65}>65 - Óbito da gestante e do concepto</Select.Option>
                                        <Select.Option value={66}>66 - Óbito da mãe/puerpera e alta do recem-nascido</Select.Option>
                                        <Select.Option value={67}>67 - Obito da mae/puerpera e permanencia do recem nascido</Select.Option>
                                    </Select>
                                </Descriptions.Item>

                            </Descriptions>
                        </section>
                        <section id="declaracoes">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Declarações</Divider>
                            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="Tipo Declaracao" >
                                    <Select
                                        name="tipoDeDecl"
                                        placeholder="Tipo de Declaração"
                                    >
                                        <Select.Option value={'nascimento'}>Nascimento</Select.Option>
                                        <Select.Option value={'obito'}>Obito</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="Numero da Declaração" >
                                    <MyTextInput name="numeroDecl" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="CID Óbito" >
                                    <MyTextInput name="cidObito" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="Obito do RN" >
                                    <Select
                                        name="obitoRN"
                                        placeholder='Óbito do RN'
                                    >
                                        <Select.Option value={true}>Sim</Select.Option>
                                        <Select.Option value={false}>Não</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                            </Descriptions>
                            <TableDec />
                        </section>
                        <section id="procedimentos-e-exames-realizados">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Procedimentos e Exames Realizados</Divider>
                            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="34 - Data">
                                    <DatePicker name="dataProc" placeholder="Data" />
                                </Descriptions.Item>
                                <Descriptions.Item label="35 - Hora Inicial" >
                                    <TimePicker name="horaInicioProc" placeholder="Hora" />
                                </Descriptions.Item>
                                <Descriptions.Item label="36 - Hora Final" >
                                    <TimePicker name="horaFimProc" placeholder="Hora" />
                                </Descriptions.Item>
                                <Descriptions.Item label="37 - Tabela" >
                                    <MyTextInput name="tabProc" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="38 - Código do Procedimento" >
                                    <MyTextInput name="codProc" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="39 - Descrição">
                                    <MyTextInput name="descProc" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="40 - Qtde">
                                    <MyTextInput name="qtdProc" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="41 - Via" >
                                    <Select
                                        style={{ width: "100%" }}
                                        name="viaProc"
                                        placeholder="Via"
                                    >
                                        <Select.Option value={'unica-via'}>Unica</Select.Option>
                                        <Select.Option value={'mesma-via'}>Mesma Via</Select.Option>
                                        <Select.Option value={'diferentes-vias'}>Diferentes Vias</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="42 - Téc" >
                                    <Select
                                        style={{ width: "100%" }}
                                        name="tecProc"
                                    >
                                        <Select.Option value={'convencional'}>Convencional</Select.Option>
                                        <Select.Option value={'videolaparoscopia'}>Videolaparoscopia</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="43 - % Red/Acrésc">
                                    <MyTextInput name="%redAcresc" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="44 - Valor Unitário - R$">
                                    <MyTextInput name="valorUnitProc" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="44 - Valor Total">
                                    Valor total
                                </Descriptions.Item>
                            </Descriptions>
                            <Button size="small" loading={sending} type="primary" className="add" onClick={submit}>Adicionar</Button>
                            <TableProc />
                        </section>
                        <section id="identificacao-da-equipe">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Identificação da equipe</Divider>
                            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="46 - Seq.Ref">
                                    <MyTextInput name="seqref" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="47 - Grau Part" >
                                    <Select
                                        style={{ width: "100%" }}
                                        name="grauPart"
                                    >
                                        <Select.Option value={'00'}>Cirurgião</Select.Option>
                                        <Select.Option value={'01'}>Primeiro Auxiliar</Select.Option>
                                        <Select.Option value={'02'}>Segundo Auxiliar</Select.Option>
                                        <Select.Option value={'03'}>Terceiro Auxiliar</Select.Option>
                                        <Select.Option value={'04'}>Quarto Auxiliar</Select.Option>
                                        <Select.Option value={'05'}>Instrumentador </Select.Option>
                                        <Select.Option value={'06'}>Anestesista</Select.Option>
                                        <Select.Option value={'07'}>Auxiliar de Anestesista</Select.Option>
                                        <Select.Option value={'08'}>Consultor</Select.Option>
                                        <Select.Option value={'09'}>Perfusionista</Select.Option>
                                        <Select.Option value={'10'}>Pediatra na sala de parto</Select.Option>
                                        <Select.Option value={'11'}>Auxiliar SADT</Select.Option>
                                        <Select.Option value={'12'}>Clínico</Select.Option>
                                        <Select.Option value={'13'}>Intensivista</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="48 - Códio na Operadora/CPF">
                                    <MyTextInput name="codOpCPF" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="49 - Nome do Profissional">
                                    <MyTextInput name="nomeProfEquip" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="50 - Conselho Profissional">
                                    <MyTextInput name="nomeConsProfEquip" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="51 - Numero no Conselho">
                                    <MyTextInput name="numConselhoEquip" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="52 - UF">
                                    <MyTextInput name="ufEquip" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="53 - Código CBO">
                                    <MyTextInput name="codCboEquip" type="text" />
                                </Descriptions.Item>
                            </Descriptions>
                            <Button size="small" loading={sending} type="primary" className="add" onClick={submit}>Adicionar</Button>
                            <TableEquip />
                        </section>
                        <section id="totais" >
                            <Descriptions layout="vertical" style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="54 - Total Proced (R$)">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="55 - Total de Diárias">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="56 - Total Taxas/Aluguéis">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="57 - Total Materiais (R$)">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="58 - Total de OPME (R$)">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="59 - Total Medicamentos (R$)">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="60 - Total Gases (R$)">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="61 - Total (R$)">
                                    R$: 4.000,00
                                </Descriptions.Item>
                            </Descriptions>
                            <Descriptions style={{ margin: "10px 0px" }} bordered size="small">
                                <Descriptions.Item label="81 - Observação">
                                    <Input.TextArea name="finalObs" type="text" />
                                </Descriptions.Item>
                            </Descriptions>
                        </section>
                        <h2 id="guia-de-outras-despesas" style={{ textAlign: 'center', margin: "40px 0px" }}>Guia de Outras Despesas</h2>
                        <section id="codigos-de-despesas-realizadas">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Códigos de Despesas Realizadas</Divider>
                            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="6 - CD" >
                                    <Select
                                        style={{ width: "100%" }}
                                        name="cdRealizada"
                                    >
                                        <Select.Option value={'1'}>1 - Gases Medicinais</Select.Option>
                                        <Select.Option value={'2'}>2 - Medicamentos</Select.Option>
                                        <Select.Option value={'3'}>3 - Materiais</Select.Option>
                                        <Select.Option value={'4'}>4 - Taxas Diversas</Select.Option>
                                        <Select.Option value={'5'}>5 - Diárias</Select.Option>
                                        <Select.Option value={'6'}>6 - Aluguéis</Select.Option>
                                        <Select.Option value={'7'}>7 - Taxas/Aluguéis</Select.Option>
                                        <Select.Option value={'8'}>8 - OPME</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="7 - Data" >
                                    <DatePicker name="dataDesp" placeholder="Data" />
                                </Descriptions.Item>
                                <Descriptions.Item label="8 - Hora Incial">
                                    <TimePicker name="horaInicioDesp" placeholder="Hora" />
                                </Descriptions.Item>
                                <Descriptions.Item label="9 - Hora Final">
                                    <TimePicker name="horaFimDesp" placeholder="Hora" />
                                </Descriptions.Item>
                                <Descriptions.Item label="10 - Tabela">
                                    <MyTextInput name="tabDesp" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="11 - Item">
                                    <MyTextInput name="itemDesp" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="12 - Qtde.">
                                    <MyTextInput name="qtdDesp" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="Unidade Medida" >
                                    <Select
                                        style={{ width: "100%" }}
                                        name="unidMedida"
                                    >
                                        <Select.Option value={'1'}>Medicinais</Select.Option>
                                        <Select.Option value="001">Ampola</Select.Option>
                                        <Select.Option value="002">Bilhões de Unidades Internacionais</Select.Option>
                                        <Select.Option value="003">Bisnaga</Select.Option>
                                        <Select.Option value="004">Bolsa</Select.Option>
                                        <Select.Option value="005">Caixa</Select.Option>
                                        <Select.Option value="006">Cápsula</Select.Option>
                                        <Select.Option value="007">Carpule</Select.Option>
                                        <Select.Option value="008">Comprimido</Select.Option>
                                        <Select.Option value="009">Dose</Select.Option>
                                        <Select.Option value="010">Drágea</Select.Option>
                                        <Select.Option value="011">Envelope</Select.Option>
                                        <Select.Option value="012">Flaconete</Select.Option>
                                        <Select.Option value="013">Frasco</Select.Option>
                                        <Select.Option value="014">Frasco Ampola</Select.Option>
                                        <Select.Option value="015">Galão</Select.Option>
                                        <Select.Option value="016">Glóbulo</Select.Option>
                                        <Select.Option value="017">Gotas</Select.Option>
                                        <Select.Option value="018">Grama</Select.Option>
                                        <Select.Option value="019">Litro</Select.Option>
                                        <Select.Option value="020">Microgramas</Select.Option>
                                        <Select.Option value="021">Milhões de Unidades Internacionais</Select.Option>
                                        <Select.Option value="022">Miligrama</Select.Option>
                                        <Select.Option value="023">Milímetro</Select.Option>
                                        <Select.Option value="024">Óvulo</Select.Option>
                                        <Select.Option value="025">Pastilha</Select.Option>
                                        <Select.Option value="026">Lata</Select.Option>
                                        <Select.Option value="027">Pérola</Select.Option>
                                        <Select.Option value="028">Pílula</Select.Option>
                                        <Select.Option value="029">Pote</Select.Option>
                                        <Select.Option value="030">Quilograma</Select.Option>
                                        <Select.Option value="031">Seringa</Select.Option>
                                        <Select.Option value="032">Supositório</Select.Option>
                                        <Select.Option value="033">Tablete </Select.Option>
                                        <Select.Option value="034">Tubete</Select.Option>
                                        <Select.Option value="035">Tubo</Select.Option>
                                        <Select.Option value="036">Unidade</Select.Option>
                                        <Select.Option value="037">Unidade Internacional </Select.Option>
                                        <Select.Option value="038">Centímetro</Select.Option>
                                        <Select.Option value="039">Conjunto</Select.Option>
                                        <Select.Option value="040">Kit</Select.Option>
                                        <Select.Option value="041">Maço</Select.Option>
                                        <Select.Option value="042">Metro</Select.Option>
                                        <Select.Option value="043">Pacote</Select.Option>
                                        <Select.Option value="044">Peça</Select.Option>
                                        <Select.Option value="045">Rolo</Select.Option>
                                        <Select.Option value="046">Gray</Select.Option>
                                        <Select.Option value="047">Centgray</Select.Option>
                                        <Select.Option value="048">Par</Select.Option>
                                        <Select.Option value="049">Adesivo Transdérmico</Select.Option>
                                        <Select.Option value="050">Comprimido Efervecente</Select.Option>
                                        <Select.Option value="051">Comprimido Mastigável</Select.Option>
                                        <Select.Option value="052">Sache</Select.Option>
                                    </Select>
                                </Descriptions.Item>
                                <Descriptions.Item label="13 - % Red/Acrésc">
                                    <MyTextInput name="%redAcrescDesp" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="14 - Valor Unitário">
                                    <MyTextInput name="valorUnitDesp" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="15 - Valor Total">
                                    Valor total
                                </Descriptions.Item>
                                <Descriptions.Item label="16 - Descrição">
                                    <MyTextInput name="descrDesp" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="Reg. Anvisa">
                                    <MyTextInput name="regAnvisaDesp" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="Ref. Fabricante">
                                    <MyTextInput name="refFabriDesp" type="text" />
                                </Descriptions.Item>
                                <Descriptions.Item label="Aut. Funcionamento">
                                    <MyTextInput name="autFuncDesp" type="text" />
                                </Descriptions.Item>
                            </Descriptions>
                            <Button size="small" loading={sending} type="primary" className="add" onClick={submit}>Adicionar</Button>
                            <TableDesp />
                        </section>
                        <section >
                            <Descriptions layout="vertical" style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="17 - Total Gases">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="18 - Total Medicamentos">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="19 - Total Materiais">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="20 - Total Taxas/Alugéis">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="21 - Total Diárias">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="22 - Total Total de OPME">
                                    R$: 4,00
                                </Descriptions.Item>
                                <Descriptions.Item label="23 - Total GERAL">
                                    R$: 4.500,00
                                </Descriptions.Item>
                            </Descriptions>
                        </section> */}
                        <Button
                            disabled={!isValid}
                            loading={sending}
                            type="primary"
                            className="submit"
                            onClick={submit}
                        >
                            Enviar
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}