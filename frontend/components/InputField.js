import React from 'react'

const InputField = ({ label, name, value, onChange }) => (
  <section className="input-field">
    <label htmlFor="email">
      {label}:
      <input
        type={name}
        placeholder={label}
        autoComplete={name}
        required
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  </section>
)

export default InputField
