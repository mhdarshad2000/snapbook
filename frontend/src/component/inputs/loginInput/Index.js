import "./style.css"
import { ErrorMessage, useField } from "formik"

export default function LoginInput({placeholder,...props}) {
    const [field,meta] = useField(props)
  return (
    <div className="input_wrap">
        <div>
            {meta.touched && meta.error && <ErrorMessage name={field.name} />}
        </div>
        <input
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...props}
        />
    </div>
  )
}
