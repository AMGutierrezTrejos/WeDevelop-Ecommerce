import React, { useState } from 'react'
import styles from './LegalNorm.module.css'
import { useTranslation } from 'react-i18next';

export const LegalNorm = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");
  const [requirements, setRequirements] = useState('')
  const [positiveAnswer, setPosAnswer] = useState(false)

  const handleChange = (e) => {
    setRequirements(e.target.value)
  }

  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Yes' || valueClick === 'Si') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'legalNorm': valueClick
      })
      setQuestion(question + 1)
    }
  }

  const handleClickContinue = (e) => {
    e.preventDefault()
    setQuote({
      ...quote,
      'legalNorm': requirements
    })
    setQuestion(question + 1)
  }

  const handleClickGoBack = () => {
    setQuestion(question - 1)
  }

  return (
    <div className={styles.containerLegalNorm}>
      <div className={styles.titleCuestion}>
        <h3>{t("QuoteQuestions.Section5.title")}</h3>
      </div>

      <div className={styles.containerButtons}>
        <button className={styles.button} value={t("QuoteQuestions.Section5.answer1")} onClick={handleClick}>{t("QuoteQuestions.Section5.answer1")}</button>

        <button className={styles.button} value="No" onClick={handleClick}>No</button>

        <button className={styles.button} onClick={handleClickGoBack}>{t("QuoteQuestions.Section5.answer3")}</button>
      </div>
      <br />

      {/* A continuacion aparece el index si la respuesta es positiva */}
      {positiveAnswer ? (
        <div className={styles.TrueLegalNorm}>
          <label>{t("QuoteQuestions.Section5.whichOne.title")}:</label>
          <br />
          <input
            name='requirements'
            type="text"
            placeholder={t("QuoteQuestions.Section5.whichOne.input")}
            value={requirements}
            onChange={handleChange}
          />
          <br />
          <button
            onClick={handleClickContinue}
          >
            {t("QuoteQuestions.Section5.whichOne.save")}
          </button>
        </div>
      ) : (<></>)}
    </div>
  )
}
