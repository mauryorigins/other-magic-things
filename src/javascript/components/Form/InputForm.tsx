// ---Dependencies
import { ReactElement } from 'react';
import {Row, Col} from 'antd';
// ---Interface
interface Props {
    uploadName:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    addInfo:(ev:React.SyntheticEvent)=>void;
    current:string;
}
// ---Components
export default function inputform(props:Props):ReactElement {
const {uploadName, addInfo, current} = props;
    return(
      <Row>
        <Col>
          <form className="form-conteiner" onSubmit={addInfo}>
            <input type="text" onChange={uploadName} value={current} />
            <br />
            <img src="" alt="" />
            <br />
            <button type="submit">add</button>
          </form>
        </Col>
      </Row>
); 
}