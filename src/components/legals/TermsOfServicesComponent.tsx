import {StyledCard} from "../utilities/cards/StyledCard.tsx";
import {StyledBodyCard} from "../utilities/cards/StyledBodyCard.tsx";

const TermsOfServices = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <StyledCard $maxWidth="50rem" $minHeight="auto" $maxHeight="auto">
                <StyledBodyCard>
                    <h1>Terms of Service</h1>
                    <p>Welcome to <a href="http://sc-crewfinding.com" style={{color: 'white'}} rel="noreferrer noopener">sc-crewfinding.com</a> (the "Site"), a platform
                        designed for the Star Citizen gaming community to create and manage game groups (crews). By
                        accessing or using our Site, you agree to comply with and be bound by the following Terms of
                        Service (the "Terms"). If you do not agree with these Terms, please do not use the Site.</p>

                    <h2>1. Introduction</h2>
                    <p>These Terms govern your use of the Site and the services we provide. We reserve the right to
                        modify these Terms at any time, and any changes will be effective immediately upon posting on
                        the Site.</p>

                    <h2>2. Description of Service</h2>
                    <p>The Site allows users to create crews, join them, manage members (including the ability to kick
                        members if you are the captain), delete crews, and generate Discord invitation links for their
                        crews. This service is intended solely for the Star Citizen community and should not be used for
                        other purposes.</p>

                    <h2>3. Eligibility</h2>
                    <p>To use the Site, you must be at least 13 years old. By using the Site, you represent and warrant
                        that you meet this minimum age requirement. Users under the age of 18 must obtain consent from
                        their parents or legal guardians to use the Site.</p>

                    <h2>4. Creation and Management of Crews</h2>
                    <ul>
                        <li><strong>Creation of Crews:</strong> Users can create crews on the Site. Upon creating a
                            crew, you become the captain and are responsible for its management.
                        </li>
                        <li><strong>Joining Crews:</strong> Users can join existing crews through invitations or
                            membership requests.
                        </li>
                        <li><strong>Member Management:</strong> Captains have the ability to manage crew members,
                            including the power to kick members.
                        </li>
                        <li><strong>Deleting Crews:</strong> Captains have the authority to delete their crew. This
                            action is irreversible and will result in the loss of all data related to that crew.
                        </li>
                        <li><strong>Discord Invitations:</strong> Upon creating a crew, a Discord invitation link will
                            be generated that members can use to join the associated Discord channel.
                        </li>
                    </ul>

                    <h2>5. User Conduct</h2>
                    <p>You agree to use the Site in an ethical and respectful manner. You must not:</p>
                    <ul>
                        <li>Use the Site for any illegal or unauthorized purposes.</li>
                        <li>Post content that is offensive, defamatory, or infringes on the rights of others.</li>
                        <li>Use the Site to harass, abuse, or intimidate other users.</li>
                        <li>Use bots, scripts, or other automated methods to access or interact with the Site.</li>
                    </ul>

                    <h2>6. Content Responsibility</h2>
                    <p>Users are responsible for the content they post or share on the Site. We are not responsible for
                        user-posted content and do not guarantee its accuracy, completeness, or quality. We reserve the
                        right to remove any content deemed inappropriate or that violates these Terms.</p>

                    <h2>7. Privacy</h2>
                    <p>We are committed to protecting your privacy. Our <a style={{color: 'white'}}
                        href="http://sc-crewfinding.com/privacy" rel="noreferrer noopener">Privacy Policy</a> describes how we collect,
                        use, and protect your personal information. By using the Site, you agree to our Privacy Policy.
                    </p>

                    <h2>8. Changes to the Terms</h2>
                    <p>We reserve the right to modify these Terms at any time. Changes will take effect immediately upon
                        posting on the Site. It is your responsibility to review the Terms periodically. Continued use
                        of the Site after modifications constitutes acceptance of the updated Terms.</p>

                    <h2>9. Termination</h2>
                    <p>We may, at our discretion, suspend or terminate your access to the Site at any time for any
                        reason, including but not limited to violations of these Terms. Upon termination, you must cease
                        all use of the Site immediately.</p>

                    <h2>10. Limitation of Liability</h2>
                    <p>To the fullest extent permitted by law, we will not be liable for any indirect, incidental,
                        special, consequential, or punitive damages, including loss of data or profits, arising from or
                        related to your use of the Site.</p>

                    <h2>11. Governing Law</h2>
                    <p>These Terms will be governed by and construed in accordance with the laws of [your country or
                        state]. Any disputes arising from these Terms or the use of the Site will be resolved in the
                        courts of [your country or state].</p>

                    <h2>12. Contact</h2>
                    <p>If you have any questions about these Terms, you can contact us at <a style={{color: 'white'}}
                        href="mailto:contact@sc-crewfinding.com" rel="noreferrer noopener">contact@sc-crewfinding.com</a>.</p>
                </StyledBodyCard>
            </StyledCard>
        </div>
    );
}

export default TermsOfServices;