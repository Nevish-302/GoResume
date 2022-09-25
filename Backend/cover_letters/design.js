const docx = require("docx")
const {data} = require('../models/data.model')

const { Document, Packer, Paragraph, Table, TableCell, TableRow} = docx;

const design = async (req, res) => {
    // const {res_name} = await req.body
    // const {contact, name} = await data.findOne({`data_profile : res_name`})
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                new Table({
                    rows : [
                        new TableRow({
                            children : [
                                new TableCell({
                                    children : new Paragraph(`{name.full_name}`)
                                }),
                                new TableCell({
                                    children : [
                                        new Table({
                                            rows : [
                                                {
                                                    children : [
                                                    new TableRow({
                                                        children : [
                                                            new TableCell({
                                                                children : [new Paragraph(`{contact.number}`)]
                                                            })
                                                        ]
                                                    }),
                                                    new TableRow({
                                                        children : [
                                                            new TableCell({
                                                                children : [new Paragraph(`{contact.address}`)]
                                                            })
                                                        ]
                                                    }),
                                                    new TableRow({
                                                        children : [
                                                            new TableCell({
                                                                children : [new Paragraph(`{contact.email}`)]
                                                            })
                                                        ]
                                                    }),
                                                ]
                                                },
                                            ] 
                                    }), 
                                ]
                                })
                            ]
                            }),
                        ]
                }),
                new Paragraph(`<Date>`),
                new Paragraph(`<Company Address>`),
                new Paragraph(`Dear <Addressing-To>`),
                new Paragraph('In my pursuit of new creative endeavors, was excited to find the Costume Designer opportunity with the International Peace & Film Festival in collaboration with NBC New York. As a progressive professional with styling expertise and fashion design knowledge, believe that I can bring valuable contributions to the festivals fashion team and exhibition'),
                new Paragraph(`In the past, I have designed dynamic pieces for film and television as well as theater it has been a huge development in my career to work with diverse elements for each scenario and be able to showcase scenes and settings through the presence of fashion. take my inspiration from multiple decades and sources across the world, these varying concepts have given my garments the recognition of being unique, daring, and captivating My philosophy is that introducing fresh perspectives and new techniques allow for an open and creative environment. Similar to the International Peace & Film Festival, my goal is to attract and illuminate
                viewers and festival-goors on the beauty of fashion and textiles`),
                new Paragraph(`In my Fashion Designer role, my successes have stemmed from essential skills, including pattem development and multi print assembles. am a collaborative team player who leads a team of eight designers and is always searching for opportunities to impart valuable insights into them as a team and a collaborator. With these quales, I am able to facilitate positive impact in the fashion world`),
                new Paragraph('For a greater presentation of my background and views of my designs, textile compilations, and qualifications please review my attached resume and link to my website. am eager to further speak with you about the exhibition and greatly appreciate your consideration'),
                new Paragraph(`Thank you for your time`),
                new Paragraph(`name.full_name`)
            ],
        }],
    });

    const b64string = await Packer.toBase64String(doc);
    
    res.setHeader('Content-Disposition', 'attachment; filename=My Document.docx');
    res.send(Buffer.from(b64string, 'base64'));
}
module.exports = design