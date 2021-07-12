
export class Patient {
  constructor(

    public address = "",
    public affiliate_type = "",
    public category_affiliate = "",
    public company = {},
    public company_id = 0,
    public contract = {},
    public contract_id = 0,
    public created_at = "",
    public database = "",
    public date_of_birth = "",
    public department = { id: 0, nombre: "", codigo: "" },
    public department_id = 0,
    public email = "",
    public eps = { address: "", agreements_id: 0, category: "", city: "", code: "" },
    public eps_id = 0,
    public firstname = "",
    public id = 0,
    public identifier = 0,
    public ips_principal = "",
    public level = { id: 0, number: 0, code: "", name: "", cuote: 0, },
    public level_id = 0,
    public middlename = "",
    public municipality = { id: 0, department_id: 0, nombre: "", codigo: "", codigo_dane: 0 },
    public municipality_id = 0,
    public phone = "0",
    public regimen = { code: "", id: 0, name: "", created_at: "", updated_at: "" },
    public regimen_id = 0,
    public regional = { id: 0, institution_id: 0, name: "", created_at: "", updated_at: "" },
    public regional_id = 0,
    public secondsurname = 0,
    public state = null,
    public surname = "",
    public token = "",
    public type_document_id = 0,
    public typedocument = { id: 0, code: "", dian_code: 0, name: "" },
    public updated_at = ""

  ) { }
}
