import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor

export default function Aside() {
    return (
        <Anchor offsetTop={50} targetOffset={100} className="aside">
            <Link href="#guia-resumo-internacao" title="Guia Resumo de Internação">
                <Link href="#dados-do-beneficiario" title="Dados do Beneficiário" />
                <Link href="#dados-do-contratado-executante" title="Dados do Contratado Executante" />
                <Link href="#dados-da-internacao" title="Dados da Internação" />
                <Link href="#declaracoes" title="Declarações" />
                <Link href="#procedimentos-e-exames-realizados" title="Procedimentos e Exames Realizados" />
                <Link href="#identificacao-da-equipe" title="Identificação da Equipe" />
            </Link>
            <Link href="#guia-de-outras-despesas" title="Guia de Outras Despesas">
                <Link href="#codigos-de-despesas-realizadas" title="Codigos de Despesas Realizadas" />
            </Link>
        </Anchor>
    )
}