import { ContactsForm, Container } from "@components";

const Contacts: React.FC = () => {
  return (
    <section
      id="contacts"
      className="section background-overlay section-contacts"
    >
      <Container>
        <div className="flex flex-col gap-[36px] desktop:gap-[72px] relative z-[1]">
          <h2 className="text-heading">
            Contact <span className="font-medium">us</span>
          </h2>

          <div className="flex flex-col gap-[12px] tablet:gap-[64px] desktop:flex-row desktop:gap-[230px]">
            <address className="flex flex-col tablet:flex-row desktop:flex-col gap-[26px] tablet:gap-[90px] desktop:gap-[124px] desktop:grow not-italic">
              <ul className="flex flex-col gap-[24px] desktop:gap-[64px]">
                <li className="flex flex-row-reverse gap-[20px]">
                  <p className="address-label min-w-[80px]">Phone number</p>
                  <ul className="tablet:w-[220px] translate-y-[-3px]">
                    <li>
                      <a
                        href="tel:+380981234567"
                        className="address-text tablet:block tablet:text-right"
                      >
                        +38 (098) 12 34 567
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+380731234567"
                        className="address-text tablet:block tablet:text-right"
                      >
                        +38 (073) 12 34 567
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="flex flex-row-reverse items-center gap-[20px]">
                  <p className="address-label min-w-[80px]">E-mail</p>
                  <a
                    href="mailto:support@carptravel.com"
                    className="address-text desktop:translate-y-[-2px]"
                  >
                    support@carptravel.com
                  </a>
                </li>
              </ul>

              <div className="self-end flex flex-row desktop:flex-row-reverse gap-[20px]">
                <p className="address-label pt-[2px] desktop:min-w-[80px]">
                  Follow us
                </p>
                <ul className="min-w-[80px]">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                      className="address-text desktop:block desktop:text-right"
                    >
                      facebook
                    </a>
                  </li>
                  <li className="address-text">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                      className="address-text desktop:block desktop:text-right"
                    >
                      instagram
                    </a>
                  </li>
                  <li className="address-text">
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                      className="address-text desktop:block desktop:text-right"
                    >
                      youtube
                    </a>
                  </li>
                  <li className="address-text">
                    <a
                      href="https://www.tiktok.com/"
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                      className="address-text desktop:block desktop:text-right"
                    >
                      tiktok
                    </a>
                  </li>
                </ul>
              </div>
            </address>

            <ContactsForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
