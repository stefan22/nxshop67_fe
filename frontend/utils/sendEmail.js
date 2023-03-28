import axios from 'axios'

const sendEmail = () => {
  return axios({
    method: 'post',
    url: '/api/send-mail',
    data: {
      email,
      subject,
      message
    }
  })
}
