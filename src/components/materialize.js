import React from 'react';
import Post from './post';


const Mat = () => {
    const avatars = [
        'https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76844870_2735946593133365_7586026101554544640_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_ohc=AkHYh2kTbpUAX9EOlvH&oh=b55ee92cab6f1bcc74dd5f39a66a668b&oe=5EBDABCA',
        'https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76844870_2735946593133365_7586026101554544640_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_ohc=AkHYh2kTbpUAX9EOlvH&oh=b55ee92cab6f1bcc74dd5f39a66a668b&oe=5EBDABCA',
        'https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76844870_2735946593133365_7586026101554544640_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_ohc=AkHYh2kTbpUAX9EOlvH&oh=b55ee92cab6f1bcc74dd5f39a66a668b&oe=5EBDABCA',
        'https://instagram.fuln1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/82144318_3554906357914349_4433106135867719680_n.jpg?_nc_ht=instagram.fuln1-2.fna.fbcdn.net&_nc_ohc=dEL8POBj8xEAX_9RLu1&oh=312beb1433cc2767ac3a84e01c035702&oe=5E997D30'
    ];
    const names = [
        'aniKod',
        'aniKod',
        'aniKod',
        'Batman'
    ];
    const images = [
        [
            "https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/68698013_955369121483817_3667588694840035868_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=v_de2zOSnx8AX8HlXfw&oh=2cd7cf1f79be1328045001d3c3555f18&oe=5ED5447B",
            "https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/72533999_443914542956162_413972475097112291_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Cf92NqnbaFYAX_msAyI&oh=f0e2667cc92f11aa4c6bc5d984a20bb6&oe=5ED85E65"
        ],
        "https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/72634809_578079282964415_4299952756228560058_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=hlaukCw14pEAX-uRbtQ&oh=4ec42ea48c8f7c2a446a387282b3ae97&oe=5EB9B23F",
        "https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/71845348_424520044926575_4577689559001218395_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=qr3IAGBlf8EAX8dwj70&oh=37d8ae322998780743be5486f4e7a123&oe=5E9B994B",
        [
            "https://instagram.fuln1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/83062774_2209334429368129_4410541504701982267_n.jpg?_nc_ht=instagram.fuln1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=LIF-ouXBW7gAX-Y-xVm&oh=79abd257539d68b84be268c414becfd6&oe=5ED5870A",
            "https://instagram.fuln1-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/79741191_513814392676354_733619944581469478_n.jpg?_nc_ht=instagram.fuln1-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=-8_7S3oZrkgAX-IQRrj&oh=ad59e8c45d2877f38954ea983ec45485&oe=5EA08F28"
        ]
    ]
    return (
        <div className='row'>
            <div className='navbar-fixed'>
                <nav className="transparent z-depth-0 row">
                    <div className="nav-wrapper white container row col l6 offset-l3 col m12 hide-on-small-only com_pad">
                        <a href="#home" className="brand-logo left">
                            <div className="logo left"><svg aria-label="Instagram" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M13.86.13A17 17 0 008 1.26 11 11 0 003.8 4 12.22 12.22 0 001 8.28 18 18 0 00-.11 14.1c-.13 2.55-.13 3.38-.13 9.9s0 7.32.13 9.9A18 18 0 001 39.72 11.43 11.43 0 003.8 44 12.17 12.17 0 008 46.74a17.75 17.75 0 005.82 1.13c2.55.13 3.38.13 9.9.13s7.32 0 9.9-.13a17.82 17.82 0 005.83-1.13A11.4 11.4 0 0043.72 44a11.94 11.94 0 002.78-4.24 17.7 17.7 0 001.13-5.82c.13-2.55.13-3.38.13-9.9s0-7.32-.13-9.9a17 17 0 00-1.13-5.86A11.31 11.31 0 0043.72 4a12.13 12.13 0 00-4.23-2.78A17.82 17.82 0 0033.66.13C31.11 0 30.28 0 23.76 0s-7.31 0-9.9.13m.2 43.37a13.17 13.17 0 01-4.47-.83 7.25 7.25 0 01-2.74-1.79 7.25 7.25 0 01-1.79-2.74 13.23 13.23 0 01-.83-4.47c-.1-2.52-.13-3.28-.13-9.7s0-7.15.13-9.7a12.78 12.78 0 01.83-4.44 7.37 7.37 0 011.79-2.75A7.35 7.35 0 019.59 5.3a13.17 13.17 0 014.47-.83c2.52-.1 3.28-.13 9.7-.13s7.15 0 9.7.13a12.78 12.78 0 014.44.83 7.82 7.82 0 014.53 4.53 13.12 13.12 0 01.83 4.44c.13 2.51.13 3.27.13 9.7s0 7.15-.13 9.7a13.23 13.23 0 01-.83 4.47 7.9 7.9 0 01-4.53 4.53 13 13 0 01-4.44.83c-2.51.1-3.28.13-9.7.13s-7.15 0-9.7-.13m19.63-32.34a2.88 2.88 0 102.88-2.88 2.89 2.89 0 00-2.88 2.88M11.45 24a12.32 12.32 0 1012.31-12.35A12.33 12.33 0 0011.45 24m4.33 0a8 8 0 118 8 8 8 0 01-8-8"></path></svg>
                            </div>
                            <div className="seperator left"></div>
                            <img alt="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                        </a>
                        <div className="input-field infut_css col l3 offset-l5 m4 offset-m4 hide-on-small-only grey lighten-5">
                            <input id="search" type="search" required />
                            <label className="label-icon" for="search"><i className="material-icons search">search</i></label>
                            <i className="material-icons close">close</i>
                        </div>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <a href="#1" className="waves-effect waves-light black-text">
                                    <svg aria-label="Find People" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                        <path clip-rule="evenodd" d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z" fill-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#2" className="waves-effect waves-light black-text">
                                    <svg aria-label="Activity Feed" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                        <path clip-rule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" fill-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#3" className="waves-effect waves-light black-text">
                                    <svg aria-label="Profile" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                        <path d="M24 27c-7.1 0-12.9-5.8-12.9-12.9s5.8-13 12.9-13c7.1 0 12.9 5.8 12.9 12.9S31.1 27 24 27zm0-22.9c-5.5 0-9.9 4.5-9.9 9.9s4.4 10 9.9 10 9.9-4.5 9.9-9.9-4.4-10-9.9-10zm20 42.8c-.8 0-1.5-.7-1.5-1.5V42c0-5-4-9-9-9h-19c-5 0-9 4-9 9v3.4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V42c0-6.6 5.4-12 12-12h19c6.6 0 12 5.4 12 12v3.4c0 .8-.7 1.5-1.5 1.5z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-wrapper white container phone hide-on-med-and-up">
                        <ul id="nav-mobile" className="right row">
                            <li>
                                <a href="#1" className="waves-effect waves-light black-text">
                                    <svg aria-label="New Story" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M38.5 46h-29c-5 0-9-4-9-9V17c0-5 4-9 9-9h1.1c1.1 0 2.2-.6 2.7-1.7l.5-1c1-2 3.1-3.3 5.4-3.3h9.6c2.3 0 4.4 1.3 5.4 3.3l.5 1c.5 1 1.5 1.7 2.7 1.7h1.1c5 0 9 4 9 9v20c0 5-4 9-9 9zm6-29c0-3.3-2.7-6-6-6h-1.1C35.1 11 33 9.7 32 7.7l-.5-1C31 5.6 29.9 5 28.8 5h-9.6c-1.1 0-2.2.6-2.7 1.7l-.5 1c-1 2-3.1 3.3-5.4 3.3H9.5c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h29c3.3 0 6-2.7 6-6V17zM24 38c-6.4 0-11.5-5.1-11.5-11.5S17.6 15 24 15s11.5 5.1 11.5 11.5S30.4 38 24 38zm0-20c-4.7 0-8.5 3.8-8.5 8.5S19.3 35 24 35s8.5-3.8 8.5-8.5S28.7 18 24 18z" fill-rule="evenodd"></path></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#2" className="waves-effect waves-light black-text">
                                    <img alt="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                                </a>
                            </li>
                            <li>
                                <a href="#3" className="waves-effect waves-light black-text">
                                    <svg aria-label="Direct" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='main row col l8 offset-l2'>
                <div className='posts'>
                    <Post avatar={avatars[0]} name={names[0]} image={images[0]}/>
                    <div className='row col l4 side hide-on-med-and-down'>
                        <nav className='z-depth-0'>
                            <div className="nav-wrapper white box">
                                <a href="#" className="brand-logo show-on-small left">
                                    <img className='circle profile' src='https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76844870_2735946593133365_7586026101554544640_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_ohc=AkHYh2kTbpUAX9EOlvH&oh=b55ee92cab6f1bcc74dd5f39a66a668b&oe=5EBDABCA'></img>
                                    <h6 className='black-text'>brightgram</h6>
                                </a>
                            </div>
                        </nav>
                    </div>
                    <Post avatar={avatars[1]} name={names[1]} image={images[1]}/>
                    <Post avatar={avatars[2]} name={names[2]} image={images[2]}/>
                    <Post avatar={avatars[3]} name={names[3]} image={images[3]}/>
                </div>
            </div>
        </div >
    );
}

export default Mat;