import { useEffect, useRef } from "react"
import { useLocation } from 'react-router-dom';

export default function Legal() {
    const location = useLocation();
    const { state } = location;
    const terms = useRef()
    const contact = useRef()
    const privacy = useRef()

    const refsObject = {
        terms: terms,
        privacy: privacy,
        contact, contact
    }

    useEffect(() => {
        if (state && state.ref) {
            window.scrollTo({ top: refsObject[state.ref].current.offsetTop });
        }
        if (!state) {
            console.log('no state')
        }
    }, [])

    return (

        <div className="legal">
            <div ref={terms} className="termsofservice">
                <br />
                <p><strong>Terms of Service</strong></p>
                <p>Our Terms of Service were last updated on 20 Nov, 2023.</p>
                <p>Please read these terms and conditions carefully before using Our Service.</p>
                <p><strong>Interpretation and Definitions</strong></p>
                <p><strong>Interpretation</strong></p>
                <p>The words of which the initial letter is capitalized have meanings defined under the following
                    conditions. The following definitions shall have the same meaning regardless of whether they appear in
                    singular or in plural.</p>
                <p><strong>Definitions</strong></p>
                <p>For the purposes of these Terms of Service:</p>
                <ul>
                    <li>
                        <p><strong>"Affiliate"</strong> means an entity that controls, is controlled by or is under common
                            control with a party, where "control" means ownership of 50% or more of the shares, equity
                            interest or other securities entitled to vote for election of directors or other managing
                            authority.</p>
                    </li>
                    <li>
                        <p><strong>"Account"</strong> means a unique account created for You to access our Service or parts
                            of our Service.</p>
                    </li>
                    <li>
                        <p><strong>"Company"</strong> (referred to as either "the Company", "We", "Us" or "Our" in this
                            Agreement) refers to cato.</p>
                    </li>
                    <li>
                        <p><strong>"Country"</strong> refers to Canada.</p>
                    </li>
                    <li>
                        <p><strong>"Content"</strong> refers to content such as text, images, or other information that can
                            be posted, uploaded, linked to or otherwise made available by You, regardless of the form of
                            that content.</p>
                    </li>
                    <li>
                        <p><strong>"Device"</strong> means any device that can access the Service such as a computer, a
                            cellphone or a digital tablet.</p>
                    </li>
                    <li>
                        <p><strong>"Feedback"</strong> means feedback, innovations or suggestions sent by You regarding the
                            attributes, performance or features of our Service.</p>
                    </li>
                    <li>
                        <p><strong>"Service"</strong> refers to the Website.</p>
                    </li>
                    <li>
                        <p><strong>"Terms of Service"</strong> (also referred as "Terms" or "Terms of Service") mean these
                            Terms of Service that form the entire agreement between You and the Company regarding the use of
                            the Service.</p>
                    </li>
                    <li>
                        <p><strong>"Third-party Social Media Service"</strong> means any services or content (including
                            data, information, products or services) provided by a third-party that may be displayed,
                            included or made available by the Service.</p>
                    </li>
                    <li>
                        <p><strong>"You"</strong> means the individual accessing or using the Service, or the company, or
                            other legal entity on behalf of which such individual is accessing or using the Service, as
                            applicable.</p>
                    </li>
                </ul>
                <p><strong>Acknowledgment</strong></p>
                <p>These are the Terms of Service governing the use of this Service and the agreement that operates between
                    You and Us. These Terms of Service set out the rights and obligations of all users regarding
                    the use of the Service.</p>
                <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these
                    Terms of Service. These Terms of Service apply to all visitors, users and others who access or use the
                    Service.</p>
                <p>By accessing or using the Service You agree to be bound by these Terms of Service. If You disagree with
                    any part of these Terms of Service then You may not access the Service.</p>
                <p>You represent that you are over the age of 18. We do not permit those under 18 to use the
                    Service.</p>
                <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the
                    Privacy Policy of Us. Our Privacy Policy describes Our policies and procedures on the
                    collection, use and disclosure of Your personal information when You use the Application or the Website
                    and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy
                    carefully before using Our Service.</p>
                <p><strong>User Accounts</strong></p>
                <p>When You create an account with Us, You must provide Us information that is accurate, complete, and
                    current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                    termination of Your account on Our Service.</p>
                <p>You are responsible for safeguarding the password that You use to access the Service and for any
                    activities or actions under Your password, whether Your password is with Our Service or a Third-Party
                    Social Media Service.</p>
                <p>You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming
                    aware of any breach of security or unauthorized use of Your account.</p>
                <p>You may not use as a username the name of another person or entity or that is not lawfully available for
                    use, a name or trademark that is subject to any rights of another person or entity other than You
                    without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.</p>
                <p><strong>Content</strong></p>
                <p><strong>Your Right to Post Content</strong></p>
                <p>Our Service allows You to post Content. You are responsible for the Content that You post to the Service,
                    including its legality, reliability, and appropriateness.</p>
                <p>By posting Content to the Service, You grant Us the right and license to use, modify, publicly perform,
                    publicly display, reproduce, and distribute such Content on and through the Service. You retain any and
                    all of Your rights to any Content You submit, post or display on or through the Service and You are
                    responsible for protecting those rights. You agree that this license includes the right for Us to make
                    Your Content available to other users of the Service, who may also use Your Content subject to these
                    Terms.</p>
                <p>You represent and warrant that: (i) the Content is Yours (You own it) or You have the right to use it and
                    grant Us the rights and license as provided in these Terms, and (ii) the posting of Your Content on or
                    through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights
                    or any other rights of any person.</p>
                <p><strong>Content Restrictions</strong></p>
                <p>We are not responsible for the content of the Service's users. You expressly understand and agree
                    that You are solely responsible for the Content and for all activity that occurs under your account,
                    whether done so by You or any third person using Your account.</p>
                <p>You may not transmit any Content that is unlawful, offensive, upsetting, intended to disgust,
                    threatening, libelous, defamatory, obscene or otherwise objectionable. Examples of such objectionable
                    Content include, but are not limited to, the following:</p>
                <ul>
                    <li>Unlawful or promoting unlawful activity.</li>
                    <li>Defamatory, discriminatory, or mean-spirited content, including references or commentary about
                        religion, race, sexual orientation, gender, national/ethnic origin, or other targeted groups.</li>
                    <li>Spam, machine – or randomly – generated, constituting unauthorized or unsolicited advertising, chain
                        letters, any other form of unauthorized solicitation, or any form of lottery or gambling.</li>
                    <li>Containing or installing any viruses, worms, malware, trojan horses, or other content that is
                        designed or intended to disrupt, damage, or limit the functioning of any software, hardware or
                        telecommunications equipment or to damage or obtain unauthorized access to any data or other
                        information of a third person.</li>
                    <li>Infringing on any proprietary rights of any party, including patent, trademark, trade secret,
                        copyright, right of publicity or other rights.</li>
                    <li>Impersonating any person or entity including the Company and its employees or representatives.</li>
                    <li>Violating the privacy of any third person.</li>
                    <li>False information and features.</li>
                </ul>
                <p>We reserve the right, but not the obligation, to, in its sole discretion, determine whether or
                    not any Content is appropriate and complies with this Terms, refuse or remove this Content.
                    We further reserve the right to make formatting and edits and change the manner of any Content.
                    We can also limit or revoke the use of the Service if You post such objectionable Content.<br />
                    As We cannot control all content posted by users and/or third parties on the Service, you agree
                    to use the Service at your own risk. You understand that by using the Service You may be exposed to
                    content that You may find offensive, indecent, incorrect or objectionable, and You agree that under no
                    circumstances will We be liable in any way for any content, including any errors or omissions
                    in any content, or any loss or damage of any kind incurred as a result of your use of any content.</p>
                <p><strong>Content Backups</strong></p>
                <p>Although regular backups of Content are performed, We do not guarantee there will be no loss
                    or corruption of data.</p>
                <p>Corrupt or invalid backup points may be caused by, without limitation, Content that is corrupted prior to
                    being backed up or that changes during the time a backup is performed.</p>
                <p>We will provide support and attempt to troubleshoot any known or discovered issues that may
                    affect the backups of Content. But You acknowledge that We have no liability related to the
                    integrity of Content or the failure to successfully restore Content to a usable state.</p>
                <p>You agree to maintain a complete and accurate copy of any Content in a location independent of the
                    Service.</p>
                <p><strong>Copyright Policy</strong></p>
                <p><strong>Intellectual Property Infringement</strong></p>
                <p>We respect the intellectual property rights of others. It is Our policy to respond to any claim that
                    Content posted on the Service infringes a copyright or other intellectual property infringement of any
                    person.</p>
                <p>If You are a copyright owner, or authorized on behalf of one, and You believe that the copyrighted work
                    has been copied in a way that constitutes copyright infringement that is taking place through the
                    Service, You must submit Your notice in writing to the attention of our copyright agent via email
                    and include in Your notice a detailed description of the alleged
                    infringement.</p>
                <p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that
                    any Content is infringing Your copyright.</p>
                <p><strong>DMCA Notice and DMCA Procedure for Copyright Infringement Claims</strong></p>
                <p>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our
                    Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
                </p>
                <ul>
                    <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the
                        copyright's interest.</li>
                    <li>A description of the copyrighted work that You claim has been infringed, including the URL (i.e.,
                        web page address) of the location where the copyrighted work exists or a copy of the copyrighted
                        work.</li>
                    <li>Identification of the URL or other specific location on the Service where the material that You
                        claim is infringing is located.</li>
                    <li>Your address, telephone number, and email address.</li>
                    <li>A statement by You that You have a good faith belief that the disputed use is not authorized by the
                        copyright owner, its agent, or the law.</li>
                    <li>A statement by You, made under penalty of perjury, that the above information in Your notice is
                        accurate and that You are the copyright owner or authorized to act on the copyright owner's behalf.
                    </li>
                </ul>
                <p>You can contact our copyright agent via email. Upon receipt of a
                    notification, the Company will take whatever action, in its sole discretion, it deems appropriate,
                    including removal of the challenged content from the Service.</p>
                <p><strong>Intellectual Property</strong></p>
                <p>The Service and its original content (excluding Content provided by You or other users), features and
                    functionality are and will remain the exclusive property of the Company and its licensors.</p>
                <p>The Service is protected by copyright, trademark, and other laws of both the Country and foreign
                    countries.</p>
                <p>Our trademarks and trade dress may not be used in connection with any product or service without the
                    prior written consent of the Company.</p>
                <p><strong>Your Feedback to Us</strong></p>
                <p>You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such
                    assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable,
                    royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify
                    and exploit such Feedback without restriction.</p>
                <p><strong>Links to Other Websites</strong></p>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by
                    Us.</p>
                <p>We have no control over, and assumes no responsibility for, the content, privacy policies, or
                    practices of any third party web sites or services. You further acknowledge and agree that We
                    shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to
                    be caused by or in connection with the use of or reliance on any such content, goods or services
                    available on or through any such web sites or services.</p>
                <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites
                    or services that You visit.</p>
                <p><strong>Termination</strong></p>
                <p>We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason
                    whatsoever, including without limitation if You breach these Terms of Service.</p>
                <p>Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your
                    Account, You may simply discontinue using the Service.</p>
                <p><strong>Limitation of Liability</strong></p>
                <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its
                    suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be
                    limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased
                    anything through the Service.</p>
                <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be
                    liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not
                    limited to, damages for loss of profits, loss of data or other information, for business interruption,
                    for personal injury, loss of privacy arising out of or in any way related to the use of or inability to
                    use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in
                    connection with any provision of this Terms), even if the Company or any supplier has been advised of
                    the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or
                    consequential damages, which means that some of the above limitations may not apply. In these states,
                    each party's liability will be limited to the greatest extent permitted by law.</p>
                <p><strong>"AS IS" and "AS AVAILABLE" Disclaimer</strong></p>
                <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without
                    warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own
                    behalf and on behalf of its Affiliates and its and their respective licensors and service providers,
                    expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to
                    the Service, including all implied warranties of merchantability, fitness for a particular purpose,
                    title and non-infringement, and warranties that may arise out of course of dealing, course of
                    performance, usage or trade practice. Without limitation to the foregoing, the Company provides no
                    warranty or undertaking, and makes no representation of any kind that the Service will meet Your
                    requirements, achieve any intended results, be compatible or work with any other software, applications,
                    systems or services, operate without interruption, meet any performance or reliability standards or be
                    error free or that any errors or defects can or will be corrected.</p>
                <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any
                    representation or warranty of any kind, express or implied: (i) as to the operation or availability of
                    the Service, or the information, content, and materials or products included thereon; (ii) that the
                    Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any
                    information or content provided through the Service; or (iv) that the Service, its servers, the content,
                    or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms,
                    malware, timebombs or other harmful components.</p>
                <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable
                    statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to
                    You. But in such a case the exclusions and limitations set forth in this section shall be applied to the
                    greatest extent enforceable under applicable law.</p>
                <p><strong>Governing Law</strong></p>
                <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of
                    the Service. Your use of the Application may also be subject to other local, state, national, or
                    international laws.</p>
                <p><strong>Disputes Resolution</strong></p>
                <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute
                    informally by contacting Us.</p>
                <p><strong>For European Union (EU) Users</strong></p>
                <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the
                    country in which you are resident in.</p>
                <p><strong>United States Legal Compliance</strong></p>
                <p>You represent and warrant that (i) You are not located in a country that is subject to the United States
                    government embargo, or that has been designated by the United States government as a "terrorist
                    supporting" country, and (ii) You are not listed on any United States government list of prohibited or
                    restricted parties.</p>
                <p><strong>Severability and Waiver</strong></p>
                <p><strong>Severability</strong></p>
                <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed
                    and interpreted to accomplish the objectives of such provision to the greatest extent possible under
                    applicable law and the remaining provisions will continue in full force and effect.</p>
                <p><strong>Waiver</strong></p>
                <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation
                    under these Terms shall not effect a party's ability to exercise such right or require such performance
                    at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.
                </p>
                <p><strong>Translation Interpretation</strong></p>
                <p>These Terms of Service may have been translated if We have made them available to You on our
                    Service.<br />
                    You agree that the original English text shall prevail in the case of a dispute.</p>
                <p><strong>Changes to These Terms of Service</strong></p>
                <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision
                    is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms
                    taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound
                    by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the
                    website and the Service.</p>
                <p><strong>Contact Us</strong></p>
                <p>If you have any questions about these Terms of Service, do not hesitate to contact us.</p>

                {/* <!-- End of: Terms of Service  --> */}
            </div>
            <br />
            <br />

            <div className="disclaimer">Disclaimer
                <br />
                <p><strong>Copyright Disclaimer</strong></p>
                <p>
                    This site’s Youtube content — texts, images, and videos — are subject to copyright protection from
                    Youtube.
                    All rights and credit go directly to its rightful owners. No copyright infringement intended.
                    <br />
                    For details please visit <a
                        href="https://developers.google.com/youtube/terms/developer-policies">YouTube API Services -
                        Developer Policies</a>.
                </p>
                <p><strong>Fair Use Disclaimer</strong></p>
                <p>
                    This website may contain copyrighted material whose use has not been specifically authorized by the
                    copyright owner.
                    We are making such material available in our efforts to advance criticism, commentary, communication,
                    freedom of speech, etc.
                    We believe that this constitutes a "fair use" of the copyrighted material as provided for in section 107
                    of the US Copyright Law.
                    If you wish to use this copyrighted material for purposes of your own that go beyond "fair use," you
                    must obtain permission from the copyright owner.
                    In accordance with Title 17 U.S.C. Section 107, the material on this site is distributed without profit
                    to those who have expressed a prior interest in receiving the included information for research and
                    educational purposes.
                    If your copyrighted material appears on this web site and you disagree with our assessment that it
                    constitutes "fair use", contact us.
                </p>
                <p><strong>Views Expressed Disclaimer</strong></p>
                <p>
                    All opinions expressed by cato users are solely their opinions and do not reflect nor imply the opinions
                    of cato or the owner of cato.
                </p>
            </div>

            <br />
            <br />

            <div ref={privacy} className="privacypolicy">
                <h4 id="privacypolicy">Privacy Policy</h4>
                <br />

                <p>This section is used to inform website visitors regarding our policies with the collection, use, and
                    disclosure of Personal Information if anyone decided to use our service.</p>
                <p>If you choose to use our Service, then you agree to the collection and use of information in
                    relation with this policy. The Personal Information that we collect are used for providing and
                    improving the Service. We will not use or share your information with anyone except as described
                    in this Privacy Policy.</p>
                <p>The terms used in this Privacy Policy have the same meanings as in our Terms of Service,
                    which is accessible on the same page, unless otherwise defined in this Privacy Policy.</p>

                <p><strong>Information Collection and Use</strong></p>
                <p>For a better experience while using our Service, we may require you to provide us with certain
                    personally identifiable information, including but not limited to your name and picture from your Google
                    account.
                    Some information such as your name that we request will be retained by us and used as described in this
                    privacy policy.
                </p>
                <p>The app does use third party services that may collect information used to identify you.
                    Sign-in method is provided by Google Identity.</p>
                <br />
                For details please visit: <a href="https://support.google.com/accounts/answer/12921417?hl=en">Privacy and Security in
                    Google Identity</a>.
                <p><strong>Log Data</strong></p>
                <p>We want to inform you that whenever you use our Service, in case of an error in the app we
                    collect data and information (through third party products) on your phone called Log Data. This Log Data
                    may include information such as your devices’s Internet Protocol (“IP”) address, device name,
                    operating system version, configuration of the app when utilising our Service, the time and date
                    of your use of the Service, and other statistics.</p>

                <p><strong>Cookies</strong></p>
                <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier.
                    These are sent to your browser from the website that you visit and are stored on your devices’s
                    internal memory.</p>
                <p>This Services does not uses these “cookies” explicitly. However, the app may use third
                    party code and libraries that use “cookies” to collection information and to improve their services. You
                    have the option to either accept or refuse these cookies, and know when a cookie is being sent
                    to your device. If you choose to refuse our cookies, you may not be able to use some portions of
                    this Service.</p>

                <p><strong>Service Providers</strong></p>

                <p>We may employ third-party companies and individuals due to the following reasons:</p>
                <ul>
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                </ul>
                <p>We want to inform users of this Service that these third parties have access to your Personal
                    Information. The reason is to perform the tasks assigned to them on our behalf. However, they
                    are obligated not to disclose or use the information for any other purpose.</p>

                <p><strong>Security</strong></p>
                <p>We value your trust in providing us your Personal Information, thus we are striving to use
                    commercially acceptable means of protecting it. But remember that no method of transmission over
                    the internet, or method of electronic storage is 100% secure and reliable, and we cannot
                    guarantee its absolute security.</p>

                <p><strong>Links to Other Sites</strong></p>
                <p>This Service may contain links to other sites. If you click on a third-party link, you will be
                    directed to that site. Note that these external sites are not operated by us. Therefore, I
                    strongly advise you to review the Privacy Policy of these websites. We have no control over, and
                    assume no responsibility for the content, privacy policies, or practices of any third-party
                    sites or services.</p>

                <p><strong>Children’s Privacy</strong></p>
                <p>This Services do not address anyone under the age of 13. We do not knowingly collect personal
                    identifiable information from children under 13. In the case we discover that a child under 13
                    has provided us with personal information, we immediately delete this from our servers. If you
                    are a parent or guardian and you are aware that your child has provided us with personal
                    information, please contact us so that we will be able to do necessary actions.</p>

                <p><strong>Changes to This Privacy Policy</strong></p>
                <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page
                    periodically for any changes. We will notify you of any changes by posting the new Privacy Policy
                    on this page. These changes are effective immediately, after they are posted on this page.</p>

                <p><strong>Contact Us</strong></p>
                <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact
                    us.</p>

                {/* <!-- End of: Privacy Policy -->     */}
            </div>
            <br />
            <br />


            <div ref={contact} className="contact">
                <h4 >Contact</h4>
                <br />
                <p>
                    Owner: Charley Yoshi
                    <br />
                    E-mail: charleyoshi2@gmail.com
                    <br />
                    Website: <a href="https://charleyoshi.com">charleyoshi.com</a>
                    <br />
                    Github: <a href="https://github.com/charleyoshi">@charleyoshi</a>
                </p>
            </div>
        </div>

    )
}
