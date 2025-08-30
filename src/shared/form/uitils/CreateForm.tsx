import React from 'react';
import FileInputField from '../../inputs/FileInputField';

interface FieldDefinition {
  label: string;
  name: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

interface CreateFormProps {
  fields: FieldDefinition[];
  register: any;
  errors: any;
}

const CreateForm: React.FC<CreateFormProps> = ({ fields, register, errors }) => {
  return (
    <div className="inputs">
      {fields.map((field) => {
        if (field.type === 'file') {
          return (
            <FileInputField
              key={field.name}
              label={field.label}
              name={field.name}
              register={register}
              // required={true}
              error={!!errors[field.name]}
            />
          );
        }
        return (
          <div key={field.name} className="input-field-ui">
            <label>{field.label}</label>
            <input
              {...register(field.name, { required: true })}
              type={field.type || 'text'}
              placeholder={field.placeholder}
            />
            {errors[field.name] && (
              <span className="error">Bu bölmə məcburidir</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CreateForm;
