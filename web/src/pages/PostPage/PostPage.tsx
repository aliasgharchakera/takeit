import './PostPage.css'

import {
  Form,
  TextField,
  Submit,
  TextAreaField,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PostPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="main-post-form-container">
      <MetaTags title="Post" description="Post page" />
      <h1>Post an Ad</h1>
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="item-name" errorClassName="form-error">
          Item Name:
        </Label>
        <TextField
          name="item-name"
          // validation={{ required: true }}
          errorClassName="form-error"
        />
        <FieldError name="item-name" className="error" />
        <Label name="item-description" errorClassName="form-error">
          Description:
        </Label>
        <TextAreaField
          name="item-description"
          // validation={{ required: true }}
          errorClassName="form-error"
        />
        <FieldError name="item-description" className="error" />
        <Submit>Post ad</Submit>
      </Form>
      <p>
        <Link to={routes.home()}>Return home</Link>
      </p>
    </div>
  )
}

export default PostPage
