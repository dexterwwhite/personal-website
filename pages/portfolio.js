import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <Head>
                  <title>Portfolio</title>
                </Head>
								<div className={styles.flexContainer}>
									<h1>Hello there!</h1>
									<Link href="/">
										<a>Go back home</a>
									</Link>
								</div>
								<body>
									<div className={styles.flexContainer}>
										<div className={styles.portItem}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
										Nam ac ultrices purus. Integer condimentum velit at commodo pellentesque. 
										Sed ultricies ex eros, at scelerisque magna pharetra ut. Nulla nec faucibus 
										est, sed laoreet magna. Praesent luctus leo lacus, eu ultricies odio semper 
										ut. Nunc pharetra sem libero, at malesuada dui tincidunt fermentum. Cras 
										nunc odio, posuere vitae consequat quis, maximus eget mi. Maecenas eu tortor 
										varius, tempus felis vitae, varius lacus. Sed a aliquam urna, eu dignissim 
										ante. Proin vitae tortor ultricies, feugiat neque sit amet, finibus mauris. 
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur 
										quam aliquam nisl mattis, et feugiat metus ultricies. Duis massa lectus, 
										eleifend eget tortor id, ullamcorper dictum nisi.
										</div>
										<div className={styles.portItem}>
										Vivamus varius risus sit amet ex iaculis vulputate quis eget nisi. Phasellus 
										nisi ligula, maximus sit amet sem a, dictum aliquam purus. Morbi iaculis, 
										tortor in eleifend faucibus, odio lorem commodo dolor, at auctor nibh lorem 
										a massa. Etiam mollis quis nunc at posuere. Aliquam vel mauris dolor. Donec 
										lacus justo, volutpat eu ante eu, congue mollis augue. Vestibulum venenatis 
										quis urna at facilisis. Fusce euismod, dolor quis tristique dictum, urna 
										quam commodo erat, sed accumsan tellus diam ut ante.
										</div>
										<div className={styles.portItem}>
										Mauris eu dapibus urna, iaculis vehicula nunc. Lorem ipsum dolor sit amet, 
										consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
										adipiscing elit. Donec placerat turpis nec aliquam tempus. Sed libero elit, 
										fermentum a scelerisque ac, mollis in ex. Quisque turpis velit, laoreet id 
										urna vitae, sollicitudin vehicula augue. Praesent ac porta tellus. Donec 
										consequat sapien mauris, eget commodo orci pretium at. Phasellus et 
										dictum magna, vel facilisis ex. Nam elementum velit magna, at viverra purus 
										eleifend eu. Sed mollis, metus eget tempor maximus, nulla metus elementum 
										arcu, eget tincidunt metus risus in elit.
										</div>
									</div>
								</body>
            </div>
        )
    }
}