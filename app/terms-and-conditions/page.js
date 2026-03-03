import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for reservations, cancellations, payments, and stay guidelines at Shanti-Ratnam.",
  alternates: {
    canonical: "/terms-and-conditions"
  }
};

export default function TermsPage() {
  const hi = getServerLocale() === "hi";
  const t = hi
    ? {
        policy: "नीति",
        title: "नियम एवं शर्तें",
        section1: "आरक्षण और रद्दीकरण के नियम",
        section2: "भुगतान",
        section3: "सुव्यवस्थित प्रवास के नियम"
      }
    : {
        policy: "Policy",
        title: "Terms & Conditions",
        section1: "Terms & Conditions for Reservations and Cancellations",
        section2: "Payments",
        section3: "Rules for a Hassle-Free Stay"
      };

  return (
    <main>
      <section className="container policy-page reveal in">
        <p className="mini-kicker">{t.policy}</p>
        <h1>{t.title}</h1>

        <section className="policy-section">
          <h2>{t.section1}</h2>
          <ul className="policy-list">
            <li>
              A minimum stay of three nights is required for all bookings. Once confirmed and paid for, admission
              dates cannot be altered and are non-refundable.
            </li>
            <li>
              All patients, new or returning, must complete a reservation form and present valid ID documents (Aadhar
              Card, Passport, Driving License, or Voter ID) for registration.
            </li>
            <li>International travelers and NRI patients must carry their Passport/OCI card upon admission.</li>
            <li>
              To confirm a reservation, 30% of the total package cost must be paid via NEFT/RTGS/UPI/Cash Deposit,
              with the remaining balance payable upon admission.
            </li>
            <li>Payments for additional services must be cleared one day before discharge.</li>
            <li>In case of an emergency discharge, a minimum charge for three nights will still apply.</li>
            <li>
              Emergency rescheduling is not permitted. Two changes are allowed within three months, provided at least
              10 days&apos; notice is given. Failure to do so will result in forfeiture of the advance deposit.
            </li>
            <li>Cancellations within 10 days of arrival will incur a 100% retention fee.</li>
            <li>Rescheduling within 10 days of arrival will attract a 50% retention fee.</li>
            <li>No refunds or credit notes will be issued for no-shows, short stays, or early departures.</li>
            <li>
              Additional services, including laboratory reports, medicines, ambulances, and premium therapies, are
              chargeable separately.
            </li>
            <li>Payments are accepted via credit/debit cards, online payments, cash, and demand drafts.</li>
            <li>
              Policies, rules, and rates are subject to change without prior notice. Management holds the final
              authority in case of disputes.
            </li>
            <li>
              Membership days cannot be combined with regular package charges. Admissions are non-transferable and
              subject to approval.
            </li>
            <li>
              Consumption of alcohol, tobacco, or any prohibited substances is strictly forbidden. Luggage may be
              subject to physical checks, and a written declaration must be signed. Violation will result in immediate
              discharge without a refund.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>{t.section2}</h2>
          <ul className="policy-list">
            <li>30% of the total amount must be deposited in advance to confirm the booking.</li>
            <li>Payments are accepted via credit/debit cards, online transactions, cash, and demand drafts.</li>
            <li>
              Additional services such as laboratory reports, laundry, salons, and other facilities will be charged
              separately as per the applicable tariff.
            </li>
            <li>
              Package rates include stay, diet, medical consultation, and two therapies based on Ayurveda &amp;
              Naturopathy. However, premium therapies, if prescribed, will incur additional charges.
            </li>
            <li>Pick-up and drop services are available at an additional cost.</li>
            <li>Government taxes and levies may apply at admission and will be charged accordingly.</li>
            <li>Tariffs, policies, and regulations are subject to change with prior notice.</li>
            <li>Management reserves the final decision in case of disputes.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>{t.section3}</h2>
          <ul className="policy-list">
            <li>Check-in time: 9:00 AM | Check-out time: 8:00 AM.</li>
            <li>Guests must bring their medical history and clinical reports for consultation.</li>
            <li>
              Therapies and diets are prescribed based on individual conditions, and personal preferences are
              discouraged.
            </li>
            <li>Delays or rescheduling of prescribed therapies may result in cancellation.</li>
            <li>Guests aged 6 months to 80 years are welcome.</li>
            <li>Guests weighing over 140 kg will not be admitted.</li>
            <li>
              Patients with unstable heart conditions, pregnancy, severe mobility issues, visual impairment, cancer,
              tuberculosis, or contagious diseases are not eligible for admission.
            </li>
            <li>Certain treatments are not provided during menstruation.</li>
            <li>
              Self-medication is prohibited. Any medication must be disclosed upon arrival and approved by the Chief
              Medical Officer (CMO).
            </li>
            <li>
              Consumption of tea, coffee, soft drinks, and outside food (except fruits) is prohibited. Food
              supplements may be purchased from the in-house pharmacy if prescribed.
            </li>
            <li>Use of mobile phones and electronic devices is restricted to guest rooms only.</li>
            <li>Alcohol, cigarettes, and nicotine products are strictly prohibited. Violation will lead to immediate discharge.</li>
            <li>Guests may not leave the premises without approval from the doctor and CMO/COO.</li>
            <li>
              Guests are advised not to bring valuable items as the management is not responsible for any loss.
            </li>
            <li>
              The use of laptops, mobile phones, and earphones is discouraged as it may distract from the purpose of
              the stay.
            </li>
            <li>
              Guests should wear comfortable clothing, including loose cotton garments, sportswear, and
              season-appropriate attire.
            </li>
            <li>
              Guests are expected to follow the rules and regulations, maintain decorum, and preserve the sanctity of
              the facility.
            </li>
            <li>
              For a smooth and beneficial stay, we appreciate your cooperation and adherence to these guidelines.
            </li>
            <li>Management reserves all rights related to admission, stay, and service provisions.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

