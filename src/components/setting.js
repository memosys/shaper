import React from 'react'

const Setting = ({
  label,
  id,
  illustration,
  settingType,
  inputType,
  value,
  onChange,
  valueUnit,
  step,
  children,
  switchIsActive,
  ...props
}) => {
  return (
    <div
      className="settingWrapper"
      style={props.max && {
        '--value': `${100-(props.max - value)/(props.max - props.min)*100}%`
      }}>
      {illustration && (
        <div className="settingIllustrationSection">
          <img alt="" src={illustration} className="settingIllustration"/>
        </div>
      )}
      <label className="settingLabel" htmlFor={id}>
        {label}
      </label>

      {settingType === "input" && (
        <>
          <input
            type={inputType}
            value={value}
            onChange={onChange}
            step={step}
            className={inputType === "text" ? 'settingTextInput' : undefined}
            {...props}
          />
          <div className="settingNumberInputWrapper">
            <input
              className="settingTextInput settingTextInputSmall"
              type="number"
              value={value}
              onChange={onChange}
              step={step}
            />
            <div className="settingNumberUnit">
              {valueUnit}
            </div>
          </div>
        </>
      )}
      {settingType === "switch" && (
        <label className="switchTrack">
          <input type="checkbox" checked={switchIsActive} onChange={onChange} />
          <div className="switchKnob"></div>
        </label>
      )}
    </div>
  )
}

export default Setting