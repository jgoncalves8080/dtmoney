import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  const data = [
    {
      title: 'Entradas',
      price: 'R$ 1.000,00',
      img: incomeImg,
    },
    {
      title: 'Saídas',
      price: '- R$ 500,00',
      img: outcomeImg,
    },
    {
      title: 'Total',
      price: 'R$ 500,00',
      img: totalImg,
    },
  ];
  return (
    <Container>
      {data.map((item) => (
        <div
          key={item.title}
          className={item.title === 'Total' ? 'highlight-background' : ''}
        >
          <header>
            <p>{item.title}</p>
            <img src={item?.img} alt="Entradas" />
          </header>
          <strong>{item.price}</strong>
        </div>
      ))}
    </Container>
  );
}
