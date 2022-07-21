import React from 'react'
import '../styleSheets/shop.css';

function Shop() {
    return(
        <div id='div-shop-conten'>
            <section id='section-logo-conten'><h1>ASUS</h1></section>
                <nav>
                    <ul className='menu-horizontal'>
                        <li>
                            <a href='#'>desktop</a>
                            <ul className='menu-vertical'>
                                <li><a href=''>1</a></li>
                                <li><a href=''>2</a></li>
                                <li><a href=''>3</a></li>
                            </ul>
                        </li>
                        
                        <li>
                            <a href='#'>lap</a>
                            <ul className='menu-vertical'>
                                <li><a href=''>4</a></li>
                                <li><a href=''>5</a></li>
                                <li><a href=''>6</a></li>
                            </ul>
                        </li>
                        
                        <li>
                            <a href='#'>movil</a>
                            <ul className='menu-vertical'>
                                <li><a href=''>7</a></li>
                                <li><a href=''>8</a></li>
                                <li><a href=''>9</a></li>
                            </ul>
                        </li>
                        
                        <li>
                            <a href='#'>otros</a>
                            <ul className='menu-vertical'>
                                <li><a href=''>10</a></li>
                                <li><a href=''>11</a></li>
                                <li><a href='./Login'>12</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

            <div className='div-taarjeta-content' id='conten-tarjeta-1'>
                <div className='picture'></div>
                <p>lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis condimentum ex,
                    sed euismod elit. Donec tincidunt iaculis sodales. Integer a commodo erat.</p>
                <section className='editar'></section>
            </div>
            <div className='div-taarjeta-content' id='conten-tarjeta-2'>
            <div className='picture'></div>
                <p>lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis condimentum ex,
                    sed euismod elit. Donec tincidunt iaculis sodales. Integer a commodo erat.</p>
                <section className='editar'></section>
            </div>
        </div>
    )
}

export default Shop;