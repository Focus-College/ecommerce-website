import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import './style.scss';

export default function Faq (props:{}){
    return <>
        <h2>FAQ</h2>
        <Container className="Container">
            <Row>
                <Col>
                    <details>
                        <summary>Where do you ship?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis tortor vel turpis tincidunt, eu tincidunt odio lacinia. Praesent et ultrices massa, ac efficitur nisl. </p>
                    </details>
                    <details>
                        <summary>How long does it take to ship my order?</summary>
                        <p>Duis eget ante fringilla, ornare nibh sit amet, sagittis ante. Vivamus dignissim odio in purus congue finibus. Cras et lacus augue. In eu urna mauris. Aenean nec felis purus. Nunc laoreet pellentesque euismod. Pellentesque lacinia dignissim turpis, eget lacinia sem varius vitae. Praesent dictum sapien risus, ac blandit nibh ultrices laoreet.</p>
                    </details>
                    <details>
                        <summary>How can I track my package?</summary>
                        <p>Nullam tincidunt pulvinar sem, eget rhoncus nisi. Aliquam suscipit, tortor vitae lobortis euismod, justo mi rhoncus libero, a lacinia tellus quam malesuada augue.</p>
                    </details>
                    <details>
                        <summary>Will I pay taxes for international shipping?</summary>
                        <p>Integer vitae interdum nibh, sed aliquam enim. Vestibulum urna est, volutpat egestas purus eget, pulvinar porta neque. </p>
                    </details>
                </Col>

                <Col>
                    <details>
                        <summary>Do you accept returns?</summary>
                        <p>Duis eget ante fringilla, ornare nibh sit amet, sagittis ante. Vivamus dignissim odio in purus congue finibus. Cras et lacus augue. In eu urna mauris. Aenean nec felis purus.</p>
                    </details>
                    <details>
                        <summary>Are returns free?</summary>
                        <p>Nunc laoreet pellentesque euismod. Pellentesque lacinia dignissim turpis, eget lacinia sem varius vitae. Praesent dictum sapien risus, ac blandit nibh ultrices laoreet. Praesent lobortis dapibus ex a accumsan.</p>
                    </details>
                    <details>
                        <summary>How long does it take to process a return?</summary>
                        <p>Nullam imperdiet ultricies lorem, sit amet porta tellus vestibulum ultricies. Donec consectetur tellus ac varius gravida. Etiam vulputate posuere sagittis. Suspendisse et lorem vel metus laoreet tristique quis in lorem. </p>
                    </details>
                    <details>
                        <summary>Can I exchange an item?</summary>
                        <p>Fusce suscipit, nisl et faucibus commodo, felis erat congue nunc, eget dignissim tortor magna quis nisi. Sed vestibulum mauris tincidunt dui molestie porta. Vestibulum commodo elit arcu, sed aliquet leo venenatis vitae. </p>
                    </details>
                </Col>
                <Col>
                    <details>
                        <summary>What payment methods do you accept?</summary>
                        <p>Mauris congue diam non nisl blandit, in sagittis dolor varius. Vestibulum vel nibh vitae dolor feugiat pretium. Integer euismod finibus lacus, quis pellentesque enim molestie eu. Quisque sit amet volutpat ipsum. Nulla vitae nisl purus.</p>
                    </details>
                    <details>
                        <summary>Which currency will I be charged in?</summary>
                        <p>Nulla fermentum erat nec orci commodo elementum. Vivamus non nisi non eros elementum laoreet.</p>
                    </details>
                    <details>
                        <summary>Do you offer 3 or 4 times payment option?</summary>
                        <p>Ut enim lorem, pellentesque vulputate risus non, pharetra venenatis sapien. Mauris vitae tincidunt mauris. Quisque laoreet tellus eu leo consequat, vitae viverra nunc fermentum. </p>
                    </details>
                </Col>
            </Row>
        </Container>
    </>;
    
}
