import React, { ReactElement, useState } from "react";


export interface LinkFormFields {
  title?: string | null;
  description?: string | null;
  link?: string | null;
  private?: boolean | null;
  permission?: boolean | null;
  [key: string]: any;
}

export interface LinkFormErrors {
  title: string[] | null;
  description: string[] | null;
  link: string[] | null;
  permission: string[] | null;
  [key: string]: any;
}


interface LinkProps {
  requestId: string | null;
  selectionNull: (e: React.MouseEvent) => void;
  submitLinkSubmission: (formData: LinkFormFields) => void;
  formErrors: LinkFormErrors;
}

const LinkForm: React.FC<LinkProps> = ( props : LinkProps) => {
  const backIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
  )
  const privateIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  )

  const [formFields, setFields] = useState<LinkFormFields>({
    title: null,
    description: null,
    link: null
  });

  const updateFields = (e: React.ChangeEvent): void => {
    /* updates the formField state */
    let key: HTMLInputElement = e.target as HTMLInputElement;
    let value: boolean | string | null;
    if (key.id == "private" || key.id == "permission") { // if the input is a checkbox, use property checked
      value = key.checked;
    } else {
      value = key.value;
    }
    let fieldValues: LinkFormFields = {...formFields}
    fieldValues[key.id as keyof LinkFormFields] = value;
    console.log(fieldValues);
    setFields(fieldValues);
  }

  const postLinkSubmission = (): void => {
    /* pass the formField state */
    props.submitLinkSubmission(formFields);
  }
  return (
    <div id="LinkForm">
      <div className="flex justify-between mb-6">
        <button onClick={ props.selectionNull }>{ backIcon } Back</button>
        <div className="invisible">x</div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-center font-bold text-2xl">Link Submission</h2>
        <label className="ml-4 mb-2">
          Title
        </label>
        <ul className="ml-4 mb-2 text-xs text-red-500">
          { props.formErrors.title ? (
              props.formErrors.title.map((error) => {
                return (
                  <li key={error}>{ error }</li>
                )
              })
            ) : (
              null
            )
          }
        </ul>
        <input 
          id="title"
          className="rounded-full px-4 py-2 border-slate-600 border-2 active:border-0 focus:border-0"
          type="text"
          placeholder="Submission Title"
          onChange={ updateFields }
        />

        <label className="ml-4 mb-2 mt-12">Description</label>
        <ul className="ml-4 mb-2 text-xs text-red-500">
          { props.formErrors.description ? (
              props.formErrors.description.map((error) => {
                return (
                  <li key={error}>{ error }</li>
                )
              })
            ) : (
              null
            )
          }
        </ul>
        <textarea
          id="description"
          className="rounded-[10px] px-4 py-2 border-slate-600 border-2 active:border-0 focus:border-0"
          rows={6} placeholder="Submission Description"
          onChange={ updateFields }
        />

        <label className="ml-4 mb-2 mt-12">Link</label>
        <ul className="ml-4 mb-2 text-xs text-red-500">
          { props.formErrors.link ? (
              props.formErrors.link.map((error) => {
                return (
                  <li key={error}>{ error }</li>
                )
              })
            ) : (
              null
            )
          }
        </ul>
        <input
          id="link"
          className="rounded-full px-4 py-2 border-slate-600 border-2 active:border-0 focus:border-0"
          type="text"
          placeholder="Submission Link"
          onChange={ updateFields }
        />

        <label className="mb-2 mt-16">
          <div className="flex items-center">Private Submission <div className="ml-2">{ privateIcon }</div></div>
          <input
            className="bg-red-100"
            type="checkbox"
            id="private"
            name="private"
            value="private"
            onChange={ updateFields }
          />
        </label>

        <label className="mb-2 mt-6">
          <span>I have permission to submit this content.</span>
          <ul className="mb-2 text-xs text-red-500">
            { props.formErrors.permission ? (
                props.formErrors.permission.map((error) => {
                  return (
                    <li key={error}>{ error }</li>
                  )
                })
              ) : (
                null
              )
            }
          </ul>
          <input
            className="bg-red-100"
            type="checkbox"
            id="permission"
            name="permission"
            value="permission"
            onChange={ updateFields }
          />
        </label>

        <button
          onClick={ postLinkSubmission }
          className="w-full bg-green-400 hover:bg-green-500 py-4 mt-6 text-slate-50 font-bold rounded-[14px]"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default LinkForm;
