import { useState } from 'react';
import styles from './faq.module.scss';
import { List, Typography, Button } from 'antd';
import { MinusIcon, PlusIcon } from 'src/assets/svg';

const data = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Information about the royal wedding and its significance.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Story of survival in the harsh outback conditions.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Investigation details and latest updates.',
  },
  {
    question: 'How do I change my account email?',
    answer: 'Extent of the damage and response efforts by authorities.',
  },
];

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq}>
      <div className="container">
        <h2 className={styles.title}>Часто задаваемые вопросы</h2>
        <List
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              className={index < data.length - 1 ? styles.itemBorder : ''}
            >
              <div className={styles.questionWrapper}>
                <div className={styles.question}>
                  <h3>{item.question}</h3>
                  <Button
                    type="text"
                    icon={openIndex === index ? <MinusIcon /> : <PlusIcon />}
                    onClick={() => toggleDescription(index)}
                  />
                </div>
                {openIndex === index && (
                  <p className={styles.answer}>{item.answer}</p>
                )}
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default HomeFaq;
