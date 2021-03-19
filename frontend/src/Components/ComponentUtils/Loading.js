import { HashLoader } from 'react-spinners';

import '../../App.css'


export default function Loading() {
    return (
      <div className="loading">
        <HashLoader
          color={'#fff'}
          size={100}
        />
      </div>
    )
}
