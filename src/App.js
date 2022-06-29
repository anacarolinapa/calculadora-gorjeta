import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
    const [valorConta, setValorConta] = useState(0);
    const [valorGorjeta, setValorGorjeta] = useState(0);
    const [porcentagem, setPorcentagem] = useState(10);
    const [pessoas, setPessoas] = useState(1);
    const [valorPessoa, setValorPessoa] = useState(0);

    useEffect(() => {
        const calcular = () => {
            setValorGorjeta((porcentagem / 100) * parseFloat(valorConta));

            if (pessoas > 1) {
                let total = parseFloat(valorConta) + valorGorjeta;
                console.log(total);
                setValorPessoa(total / parseInt(pessoas));
            }
        }

        calcular();
    }, [valorConta, porcentagem, pessoas]);

    return (
        <div className="conteudo">
            <h1 className="titulo">Calculadora de Gorjeta</h1>

            <div className="area-campo">
                <label for="valor_conta">Quanto deu a conta?</label>
                <input type="number" id="valor_conta" onChange={(e) => setValorConta(parseFloat(e.target.value))} value={valorConta} />
            </div>

            <div className="area-campo">
                <label for="porcentagem">Qual a porcentagem da gorjeta?</label>
                <input type="number" id="porcentagem" onChange={(e) => setPorcentagem(parseFloat(e.target.value))} value={porcentagem} />
            </div>

            <div className="area-campo">
                <label for="pessoas">Deseja dividir a conta em quantas pessoas?</label>
                <input type="number" id="pessoas" onChange={(e) => setPessoas(parseFloat(e.target.value))} value={pessoas} />
            </div>

            {valorGorjeta > 0 &&
                <div className="area-total">
                    <div className="item-total">
                        <span>Subtotal</span>
                        <span>R$ {parseFloat(valorConta).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
                    </div>

                    <div className="item-total">
                        <span>Valor da gorjeta ({porcentagem}%)</span>
                        <span>R$ {valorGorjeta.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
                    </div>

                    {pessoas > 1 &&
                        <div className="item-total">
                            <span>Valor por pessoa ({pessoas})</span>
                            <span>R$ {valorPessoa.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
                        </div>
                    }

                    <div className="item-total">
                        <span>Total</span>
                        <span>R$ {(parseFloat(valorConta) + valorGorjeta).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default App;
