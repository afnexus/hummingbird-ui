import React, {useState} from 'react'


const data = [
    {
        title: 'Accordion 1',
        message: 'Damnn react hard as f. I am too stressed out. Creating components from scratch is not it. My mental is going boom. Life is not great man... Random text will be ARGHHHHHHHH'
    },
    {
        title: 'Accordion 2',
        message: 'Man react is still hard to do... I think MUI is better than no MUI!'
    }
]

const boxStyle = {
    display: 'flex',
    height:'200px',
    width:'100vw',
    justifyContent:'center',
    alignItems: 'center',
}

const accordion1= {
    width: '500px',
    
}

const itemStyle = {
    backgroundColor:'#f0ebe1',
    marginBottom:'5px',
    padding:'10px 20px',
}

const titleStyle = {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    cursor:'pointer',
}

const contentStyle = {
    maxHeight:'0',
    overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0,1,0,1)',
}

const contentShow ={
    height:'auto',
    maxHeight:'9999px',
    transition: 'all 0.5s cubic-bezier(1,0,1,0)',
}

const Hccordion = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <div style={boxStyle}>
        <div style={accordion1}>
            {data.map((item, i)=>(

                <div style={itemStyle}>
                    <div style={titleStyle} onClick={() => toggle(i)}>
                        <h2>{item.title}</h2>
                        <span>{selected== i ? '-' : '+'}</span>
                    </div>

                    <div style={selected == i ? contentShow : contentStyle}>
                        {item.message}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hccordion