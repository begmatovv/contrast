import { useState } from 'react';
import styles from './faq.module.scss';
import { List, Typography, Button } from 'antd';
import { MinusIcon, PlusIcon } from 'src/assets/svg';
import { useTranslation } from 'react-i18next';

const HomeFaq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const data = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5'),
    },
  ];
  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq}>
      <div className="container">
        <h2 className={styles.title}>{t('faq.title')}</h2>
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
