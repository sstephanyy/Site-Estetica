import { ContatoFormContainer, InnerContainer, RightContainer, AllContent, StyledSelect, SubTopics } from "../styles/ContatoForm.style";
import { Description } from "../styles/SobreNos.style";

export const ContatoForm = () => {
    return(
        <ContatoFormContainer>
            <InnerContainer>
                <AllContent>
                    <div className="left-container">
                        <h3>Onde Estamos?</h3>
                        <SubTopics>
                        <svg viewBox="0 0 32 32" width={81} height={81}  xmlns="http://www.w3.org/2000/svg"><title/><g data-name="locate location map pin" id="locate_location_map_pin"><path d="M23.78,6.15A11,11,0,0,0,8.22,21.71l4.1,4.1a1,1,0,1,0,1.42-1.42l-4.1-4.1a9,9,0,1,1,12.72,0l-7.07,7.07a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7.07-7.07A11,11,0,0,0,23.78,6.15Z"/><path d="M21,14a5,5,0,1,0-5,5A5,5,0,0,0,21,14Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,14Z"/></g></svg>
                            <Description>
                                <h4>UNIDADE I</h4>
                                <p>Rua Dos Pássaros B 0001, Centro, Uberlândia - MG</p>
                            </Description>
                        </SubTopics>

                        <SubTopics>
                        <svg viewBox="0 0 32 32" width={81} height={81}  xmlns="http://www.w3.org/2000/svg"><title/><g data-name="locate location map pin" id="locate_location_map_pin"><path d="M23.78,6.15A11,11,0,0,0,8.22,21.71l4.1,4.1a1,1,0,1,0,1.42-1.42l-4.1-4.1a9,9,0,1,1,12.72,0l-7.07,7.07a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7.07-7.07A11,11,0,0,0,23.78,6.15Z"/><path d="M21,14a5,5,0,1,0-5,5A5,5,0,0,0,21,14Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,14Z"/></g></svg>
                            <Description>
                                <h4>UNIDADE II</h4>
                                <p>Rua Dos Pássaros B 0001, Centro, Uberlândia - MG</p>
                            </Description>
                        </SubTopics>

                        <SubTopics style={{marginRight: "54px"}}>
                        <svg id="Layer_1" enable-background="new 0 0 90 90" height="81" viewBox="0 0 90 90" width="81" xmlns="http://www.w3.org/2000/svg"><g><path d="m32.991 24.801h46.908l-25.624 20.122c-.543.426-1.189.634-1.775.691-.59-.058-1.238-.266-1.787-.691l-18.312-14.385c-.194-.156-.413-.275-.654-.349.862-1.216 1.354-2.687 1.328-4.272-.005-.363-.037-.737-.084-1.116zm-11.929-12.941c.059.01.156.047.367.145.417.198 1.08.708 1.729 1.419 1.307 1.424 2.613 3.581 3.291 5.005.021.042.043.088.063.135 1.924 3.301 2.754 5.826 2.779 7.41.027 1.591-.4 2.276-1.749 3.051l-3.48 2.006c-2.267 1.305-3.338 3.644-3.604 5.826-.267 2.183.126 4.304 1.097 5.981l8.59 14.805c.973 1.676 2.634 3.078 4.665 3.939 2.033.863 4.604 1.107 6.871-.195l3.48-2.002c1.348-.773 2.163-.789 3.532.025 1.373.816 3.156 2.787 5.072 6.09.027.049.053.09.084.137.898 1.295 2.121 3.492 2.711 5.332.293.914.408 1.74.371 2.197-.041.459-.051.412-.172.484l-2.648 1.518c-6.652 2.885-12.749 2.234-18.198-.592-5.459-2.838-10.204-7.963-13.512-13.98-.011-.012-.016-.027-.025-.035l-7.246-12.488c-.012-.012-.017-.023-.027-.039-3.585-5.86-5.674-12.513-5.412-18.634.262-6.112 2.742-11.684 8.584-15.971l2.649-1.513c.061-.035.081-.062.138-.056zm.027-3.721c-.701-.011-1.416.136-2.059.509l-2.801 1.611c-.063.036-.121.073-.178.109-6.739 4.932-9.842 11.798-10.145 18.875-.303 7.074 2.059 14.375 5.961 20.758l7.222 12.445-.017-.037c3.605 6.551 8.771 12.234 15.084 15.508 6.316 3.279 13.84 4.039 21.504.697.063-.027.127-.057.184-.092l2.805-1.611c1.297-.738 1.949-2.174 2.055-3.428.109-1.25-.146-2.467-.533-3.666-.758-2.371-2.08-4.674-3.172-6.254-2.063-3.549-4.055-6.012-6.357-7.389-2.32-1.383-5.105-1.363-7.377-.057l-3.48 2.006c-1.028.592-2.23.523-3.495-.012-1.259-.535-2.425-1.605-2.858-2.355l-8.59-14.804c-.434-.754-.789-2.292-.621-3.648.162-1.352.711-2.411 1.74-3.004l3.381-1.944c.088.453.344.864.715 1.14l18.313 14.388c1.191.936 2.602 1.457 4.023 1.539.072.004.146.004.219 0 1.422-.082 2.826-.604 4.018-1.539l25.222-19.814v32.734c0 .498-.568 1.154-1.682 1.154h-17.461c-1.051-.006-1.902.842-1.902 1.887 0 1.043.852 1.891 1.902 1.885h17.461c2.854 0 5.477-2.063 5.477-4.926v-34.849c0-2.865-2.623-4.927-5.477-4.927h-48.218c-.534-1.335-1.239-2.75-2.127-4.288-.831-1.73-2.179-4.017-3.866-5.856-.852-.932-1.771-1.758-2.92-2.292v.005c-.571-.27-1.25-.443-1.95-.458z"/></g></svg>

                            <Description>
                                <h4>Atendimento das 08H às 18:00</h4>
                                <p>(34) 9 9999-0000</p>
                                <p>(34) 9 3333-3333</p>
                                <p>contato@anastasia.com.br</p>
                            </Description>
                        </SubTopics>
                    </div>
                <RightContainer>
                    <h3>Fale Conosco</h3>
                    <p>Pelo canal de atendimento ao cliente estamos disponíveis para atendê-lo(a) da melhor forma.</p>
                    <form>
                        <input
                        required
                        type="text"
                        name="to_name"
                        placeholder="Nome"
                        />
                        
                        <div className="contato">
                            <input
                            required
                            type="text"
                            name="from_name"
                            placeholder="E-mail"
                            />       
                            <input
                                required
                                type="text"
                                name="from_number"
                                placeholder="Telefone"
                            />   

                        </div>

                       
                        <div>
                            <StyledSelect
                            id="inquiryType"
                            name="inquiryType"
                            >
                            <option>Harmonização Facial</option>
                            <option>Harmonização Corporal</option>
                            <option>Tratamento Faciais</option>
                            <option>Ultrassom Micro Focada</option>
                            <option>Outros Assuntos</option>

                            </StyledSelect>
                        </div>



                        <textarea
                        required
                        name="message"
                        placeholder="Mensagem"
                        rows="10"
                        ></textarea>

                        <button type="submit">
                            Enviar
                        </button>
                    </form>
                </RightContainer>
                
                </AllContent>
               
            </InnerContainer>
        </ContatoFormContainer>
    );
};

