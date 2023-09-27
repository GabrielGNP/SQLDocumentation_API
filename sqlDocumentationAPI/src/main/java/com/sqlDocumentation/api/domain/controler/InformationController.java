package com.sqlDocumentation.api.domain.controler;

import com.sqlDocumentation.api.domain.model.Information;
import com.sqlDocumentation.api.domain.service.InformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/sqlAPI")
public class InformationController {

    @Autowired
    private InformationService informationService;

    @GetMapping(value = "/allClauses")
    public ResponseEntity<List<String>> getAllClauses(){
        //List<String> clauses = informationService.getAllClauses();
        List<String> clauses = new LinkedList<String>(Arrays.asList("hola","allClauses"));
        return ResponseEntity.status(HttpStatus.OK).body(clauses);
    }

    @GetMapping(value = "/clause_{clauseName}")
    public ResponseEntity<Information> getClauseInformation(@PathVariable String clauseName){
        //return ResponseEntity.status(HttpStatus.OK).body(informationService.getClauses(clauseName));
        Information infoCluse = new Information();
        infoCluse.setClause("nombreClausula: "+clauseName);
        infoCluse.setId(1111);
        infoCluse.setDefinition("cositas");
        return ResponseEntity.status(HttpStatus.OK).body(infoCluse);

    }

    @GetMapping(value = "/allClausesInformation")
    public ResponseEntity<List<Information>> getAllClausesInformation(){
        //return ResponseEntity.status(HttpStatus.OK).body(informationService.getAllClausesInformation());
        List<Information> informationList = new LinkedList<Information>();
        Information inf1 = new Information();
        Information inf2 = new Information();
        inf1.setId(111);
        inf2.setId(222);
        inf1.setClause("clausula1");
        inf2.setClause("clausula2");
        inf1.setDefinition("cosas de clausula1");
        inf2.setDefinition("cosas de clausula2");

        informationList.add(inf1);
        informationList.add(inf2);
        return ResponseEntity.status(HttpStatus.OK).body(informationList);
    }

    @PostMapping(value = "/saveClause")
    public ResponseEntity<Boolean> saveNewClause(@RequestBody Information information){
        //return ResponseEntity.status(HttpStatus.OK).body(informationService.saveClause(information));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }
}
