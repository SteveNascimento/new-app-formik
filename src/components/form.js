import React, { useState } from 'react'
import { Descriptions, Button } from 'antd';
import { Formik, useField } from 'formik'
import { Form, Input, Select, TimePicker, DatePicker } from 'formik-antd'
import * as Yup from 'yup';
import './form.css'
import TableDec from './table-dec';
import TableProc from './table-proc';
import * as Service from '../services/submit-service'


const MyTextInput = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const formSchema = Yup.object().shape({})

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
            <Formik
                initialValues={{
                    guiaSolicitInt: "",
                }}
                validationSchema={formSchema}
            >
                <Form>
                    <section id="guia-resumo-internacao">
                        <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                            <Descriptions.Item label="1 - Registro ANS">
                                330281
                            </Descriptions.Item>
                            <Descriptions.Item label="3 - Guia Solicitação de Internação" >
                                <MyTextInput name="guiaSolicitInt" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="2 - Nº Guia no Prestador" >
                                <MyTextInput name="gnGuiaPrest" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="4 - Data da Autorização" >
                                <MyTextInput name="dtDeAut" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="5 - Senha" >
                                <MyTextInput name="senha" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="6 - Validade da Senha" >
                                <MyTextInput name="valDeSenha" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="7 - Nº Guia Operadora" >
                                <MyTextInput name="nGuiaOp" type="text" />
                            </Descriptions.Item>
                        </Descriptions>
                    </section>
                    <section id="dados-do-beneficiario">
                        <Descriptions style={{ margin: "10px 0px" }} title="Dados do Beneficiário" bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
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
                        <Descriptions style={{ margin: "10px 0px" }} title="Dados do Contratado Executante" bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
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
                        <Descriptions style={{ margin: "10px 0px" }} title="Dados da Internação" bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
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
                        <Descriptions style={{ margin: "10px 0px" }} title="Declarações" bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
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
                        <Descriptions style={{ margin: "10px 0px" }} title="Procedimentos e Exames Realizados" bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
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
                            <Descriptions.Item label="44 - Valor Unitário - R$">
                                Valor total
                            </Descriptions.Item>
                        </Descriptions>
                        <Button loading={sending} style={{ float: 'right' }} type="primary" className="submit" onClick={submit}>Adicionar</Button>
                        <TableProc />
                    </section>
                </Form>
            </Formik>

            <Button loading={sending} type="primary" className="submit" onClick={submit}>Enviar</Button>
        </div>
    )
}