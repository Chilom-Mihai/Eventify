const Beneficii = () => {
  return (
    <section className="px-4 py-20 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative z-10">
        Ce beneficii îți aduce aplicația <br />
        <span className="text-blue-600">Ality</span>
      </h2>
      <div className="w-16 h-1 bg-blue-600/80 mx-auto mt-2 mb-8 rounded-full" />

      <p className="text-gray-700 mb-6">
        Aplicația Ality este o platformă unică în România de smart event
        management, care îți pune la dispoziție o gamă variată de modele de
        invitații digitale. În plus, planificarea întregului eveniment devine
        mult mai ușoară prin intermediul acestei aplicații.
      </p>

      <ul className="list-disc pl-6 space-y-4 text-gray-700">
        <li>
          Modelele de invitații:{" "}
          <span className="text-gray-700 underline">Nuntă</span>,{" "}
          <span className="text-gray-700 underline">Botez</span>,{" "}
          <span className="text-gray-700 underline">Aniversare</span>,{" "}
          <span className="text-gray-700 underline">Nuntă și Botez</span>,{" "}
          <span className="text-gray-700 underline">Cununie civilă</span>,{" "}
          <span className="text-gray-700 underline">Moț</span>,{" "}
          <span className="text-gray-700 underline">Turta</span>.
        </li>
        <li>
          Orice model de invitație poate fi personalizat, este foarte ușor de
          distribuit și reprezintă o alternativă mult mai accesibilă decât
          varianta tradițională printată.
        </li>
        <li>
          Prin intermediul acestei aplicații, ești scutit de efortul de a suna
          fiecare invitat separat pentru a confirma prezența, deoarece vei primi
          notificări în timp real cu privire la răspunsurile primite prin
          intermediul invitațiilor digitale.
        </li>
        <li>
          Există o secțiune <strong>„SAVE THE DATE”</strong> pe care o poți
          utiliza pentru a trimite acest anunț dacă ai ajuns la acest stadiu în
          aplicație.
        </li>
        <li>
          Datorită acestor răspunsuri, poți folosi secțiunea{" "}
          <strong>„ASEAZĂ INIVITAȚII LA MESE”</strong>. Dacă ai un hostess la
          eveniment, poți invita să efectueze check-inul în timp real și astfel
          nu vor avea nevoie de listele acelea printate și greu de folosit. Prin
          intermediul unui simplu “search” în lista de invitați, vei putea găsi
          persoana și să i-o pui prezent la eveniment, astfel vei afla câte
          persoane sunt prezente la eveniment în acel moment.
        </li>
        <li>
          În plus, există o secțiune <strong>„CADOURI”</strong> unde poți atașa
          link-uri sau imagini cu obiectele pe care ți-ai dori să le primești
          cadou. Invitații pot să ți-i transmită ce anume ar dori să
          achiziționeze sau dacă pot contribui împreună cu alții pentru
          achiziționarea unuia sau mai multor produse din lista ta.
        </li>
        <li>
          Aplicația include și o listă de <strong>„TASK-URI”</strong>, extrem de
          importantă pentru a fi întotdeauna informat cu privire la pașii ce
          urmează să fie efectuați până la evenimentul tău.
        </li>
        <li>
          Mai este disponibilă și o altă secțiune <strong>„BUGET”</strong> pe
          care o poți seta. Astfel, vei putea vedea în timp real cât bani ai
          cheltuit, cât mai ai disponibil până la limita maximă a bugetului și
          poți adăuga costul fiecărui aspect al evenimentului. Dacă ai dat și un
          avans, îl poți nota chiar aici.
        </li>
        <li>
          De asemenea, poți configura <strong>„PLANUL LOCAȚIEI”</strong>, astfel
          încât invitații să poată vizualiza zona în care vor fi așezați în sala
          și să identifice zonele de interes.
        </li>
        <li>
          Aplicația oferă și o secțiune <strong>„DAR”</strong> unde poți adăuga
          ce dar ai primit de la fiecare invitat. Astfel ca, prin intermediul
          unui calculator integrat în această secțiune, vei putea calcula suma
          totală acumulată.
        </li>
        <li>
          Nu în ultimul rând, este disponibilă și secțiunea{" "}
          <strong>„PROGRAM ZIUA NUNȚII”</strong>, unde poți integra programul pe
          care îl ai și pe care trebuie să îl urmezi.
        </li>
      </ul>
    </section>
  );
};

export default Beneficii;
